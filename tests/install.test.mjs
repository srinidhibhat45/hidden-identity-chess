import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {MessageChannel} from 'node:worker_threads';
const app=await readFile(new URL('../public/game/app.mjs',import.meta.url),'utf8');
const lifecycle=app.slice(app.indexOf('function bounded('),app.indexOf('function switchMode('));
function harness({complete=true,unreachable=false,installing=false}={}){
 const calls=[],listeners=new Set();const worker={state:installing?'installing':'activated',addEventListener(name,fn){listeners.add(fn);},removeEventListener(name,fn){listeners.delete(fn);},postMessage(data,ports){assert.equal(data.type,'OFFLINE_STATUS');ports[0].postMessage({ready:complete});ports[0].close();}};
 const registration={get active(){return worker.state==='activated'?worker:null;},get installing(){return worker.state==='activated'?null:worker;}};
 let blocked=unreachable;
 const serviceWorker={register(url,options){calls.push({url,options});return blocked?new Promise(()=>{}):Promise.resolve(registration);},get ready(){throw Error('Do not wait for a controlling page: repair pages live outside scope');}};
 const context=vm.createContext({navigator:{serviceWorker},window:{caches:{}},document:{documentElement:{dataset:{}}},dialog:{open:false},MessageChannel,Promise,Error,setTimeout(fn,delay){return setTimeout(fn,delay>=20000?30:delay);},clearTimeout,render(){}});
 vm.runInContext('let offlineReady=false;'+lifecycle,context);
 return {calls,async prepare(){return vm.runInContext('prepareOffline()',context);},state(){return vm.runInContext('({ready:offlineReady,error:offlineError,pending:!!offlineTask,stage:document.documentElement.dataset.offlineStage})',context);},activate(){worker.state='activated';for(const fn of [...listeners])fn();},unblock(){blocked=false;}};
}
test('installation is ready only after the active worker confirms the complete offline save',async()=>{const h=harness();assert.equal(await h.prepare(),true);assert.equal(h.state().ready,true);assert.equal(h.state().pending,false);assert.equal(h.calls[0].options.updateViaCache,'none');});
test('installation waits for an installing worker to activate',async()=>{const h=harness({installing:true});const pending=h.prepare();await new Promise(resolve=>setImmediate(resolve));assert.equal(h.state().stage,'activating');h.activate();assert.equal(await pending,true);});
test('incomplete offline assets expose retry instead of allowing installation',async()=>{const h=harness({complete:false});assert.equal(await h.prepare(),false);assert.equal(h.state().error,true);assert.equal(h.state().ready,false);});
test('an unreachable registration times out, and retry can recover without clearing saved games',async()=>{const h=harness({unreachable:true});assert.equal(await h.prepare(),false);assert.equal(h.state().error,true);assert.equal(h.state().pending,false);h.unblock();assert.equal(await h.prepare(),true);assert.equal(h.state().error,false);});
