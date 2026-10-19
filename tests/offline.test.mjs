import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const base='https://chess.test/game/';
const source=await readFile(new URL('../public/game/sw.js',import.meta.url),'utf8');
const manifest=JSON.parse(await readFile(new URL('../public/game/manifest.webmanifest',import.meta.url),'utf8'));
// Browser fetches retain a redirected URL list even after cloning into Cache API.
function remote(body,{redirected=false,url=base,type='basic',status=200,contentType='text/html'}={}){
 const response=new Response(body,{status,headers:{'Content-Type':contentType}});
 Object.defineProperties(response,{redirected:{value:redirected},url:{value:url},type:{value:type}});
 response.clone=()=>remote(body,{redirected,url,type,status,contentType});
 return response;
}
function harness({redirected=false,failedAsset=null,wrongHTML=false}={}){
 const stores=new Map(),listeners={},requests=[],navigated=[];let offline=false;
 const key=request=>new URL(typeof request==='string'?request:request.url,base).href;
 const caches={async open(name){if(!stores.has(name))stores.set(name,new Map());const files=stores.get(name);return {async match(request){return files.get(key(request))?.clone();},async put(request,response){files.set(key(request),response);}};},async keys(){return [...stores.keys()];},async delete(name){return stores.delete(name);}};
 const self={location:new URL(base),registration:{scope:base},addEventListener(name,fn){listeners[name]=fn;},async skipWaiting(){},clients:{async claim(){},async matchAll(){return [{url:base+'index.html?room=ABCDE23',async navigate(url){navigated.push(url);}}];}}};
 vm.runInNewContext(source,{self,caches,URL,Request,Response,fetch:async request=>{
  const url=key(request);requests.push(url);if(offline)throw Error('offline');
  const asset=new URL(url).pathname.slice('/game/'.length)||'index.html';
  if(asset===failedAsset)return remote('unavailable',{status:503,url});
  const body=await readFile(new URL('../public/game/'+asset,import.meta.url));
  return remote(body,{url,redirected:asset==='index.html'&&redirected,contentType:asset==='index.html'?(wrongHTML?'text/plain':'text/html'):'application/octet-stream'});
 }});
 async function event(name,extra={}){let done;listeners[name]({...extra,waitUntil(promise){done=promise;}});await done;}
 async function fetchEvent(path,{mode='navigate',method='GET',origin=base}={}){let response,wait;listeners.fetch({request:{url:new URL(path,origin).href,method,mode,redirect:'manual'},respondWith(p){response=p;},waitUntil(p){wait=p;}});const result=await response;await wait;return result;}
 return {stores,caches,requests,navigated,event,fetchEvent,offline(){offline=true;}};
}
test('canonical installed start, legacy shortcuts and room links launch offline with all assets',async()=>{
 const h=harness();await h.event('install');await h.event('activate');const requests=h.requests.length;assert.ok(requests>=11);h.offline();
 for(const path of ['./','./?room=ABCDE23','index.html','index.html?room=ABCDE23']){const response=await h.fetchEvent(path);assert.ok(response.ok);assert.equal(response.redirected,false);assert.equal(response.url,'');assert.match(await response.text(),/id="app"/);}
 for(const path of ['app.mjs','engine.mjs','pieces.mjs','style.css','manifest.webmanifest','assets/manrope.ttf','assets/manrope-bold.ttf','assets/icon-192.png','assets/icon-512.png']){const response=await h.fetchEvent(path,{mode:'cors'});assert.ok(response.ok,path);assert.ok((await response.arrayBuffer()).byteLength>0,path);}
 assert.equal(h.requests.length,requests);assert.equal(new URL(manifest.start_url,base).href,base);assert.equal(manifest.id,'hidden-identity-chess');
});
test('redirected hosting HTML is rebuilt before browser-initiated navigation to prevent ERR_FAILED',async()=>{
 const h=harness({redirected:true});await h.event('install');h.offline();
 const response=await h.fetchEvent('index.html');assert.equal(response.redirected,false);assert.equal(response.url,'');assert.equal(response.type,'default');assert.match(await response.text(),/<!doctype html>/i);
});
test('upgrade removes old redirected caches without navigating clients during activation',async()=>{
 const h=harness();const old=await h.caches.open('hidden-chess-v7');await old.put(base+'index.html',remote('broken old page',{redirected:true}));
 await h.event('install');await h.event('activate');assert.equal(h.stores.has('hidden-chess-v7'),false);assert.deepEqual(h.navigated,[]);assert.match(await(await h.fetchEvent('index.html?room=ABCDE23')).text(),/id="app"/);h.offline();assert.match(await(await h.fetchEvent('index.html')).text(),/id="app"/);
});
test('failed offline download leaves the prior release intact and does not mark a partial install ready',async()=>{
 const h=harness({failedAsset:'pieces.mjs'});const old=await h.caches.open('hidden-chess-v7');await old.put(base,'previous release');await assert.rejects(h.event('install'),/Offline asset unavailable/);assert.ok(h.stores.has('hidden-chess-v7'));assert.equal([...h.stores.keys()].filter(k=>k!=='hidden-chess-v7').length,0);
});
test('a hosting error page cannot be installed as the game shell',async()=>{const h=harness({wrongHTML:true});await assert.rejects(h.event('install'),/Offline page unavailable/);});
test('offline readiness requires every asset; room APIs, foreign origins and writes are not cached',async()=>{
 const h=harness();await h.event('install');let status;await h.event('message',{data:{type:'OFFLINE_STATUS'},ports:[{postMessage(value){status=value;}}]});assert.equal(status.ready,true);
 const current=[...h.stores.values()][0];current.delete(base+'pieces.mjs');await h.event('message',{data:{type:'OFFLINE_STATUS'},ports:[{postMessage(value){status=value;}}]});assert.equal(status.ready,false);
 assert.equal(await h.fetchEvent('/api/rooms',{mode:'cors'}),undefined);assert.equal(await h.fetchEvent('https://other.test/game/',{mode:'navigate'}),undefined);assert.equal(await h.fetchEvent('app.mjs',{method:'POST',mode:'cors'}),undefined);assert.equal(await h.fetchEvent('unknown.json',{mode:'cors'}),undefined);
});
test('evicted navigation cache recovers from the canonical address and strips redirect metadata',async()=>{const h=harness({redirected:true});const response=await h.fetchEvent('index.html');assert.equal(response.redirected,false);assert.equal(h.requests[0],base);assert.match(await response.text(),/id="app"/);});
