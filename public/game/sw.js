const CACHE='hidden-chess-v13';
const SHELL=new URL('./',self.registration.scope).href;
const ASSETS=['./','./style.css','./app.mjs','./engine.mjs','./pieces.mjs','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/manrope.ttf','./assets/manrope-bold.ttf'];
// Hosting redirects leave URL-list metadata that browser-initiated navigation
// (redirect mode "manual") rejects. Rebuild navigation responses before caching.
async function navigationResponse(response){return new Response(await response.arrayBuffer(),{status:response.status,statusText:response.statusText,headers:response.headers});}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const entries=await Promise.all(ASSETS.map(async asset=>{
  const url=new URL(asset,self.registration.scope).href;
  const response=await fetch(new Request(url,{cache:'reload',credentials:'same-origin'}));
  if(!response.ok||response.type==='opaque'||response.type==='opaqueredirect')throw Error('Offline asset unavailable');
  if(asset==='./'&&!response.headers.get('content-type')?.includes('text/html'))throw Error('Offline page unavailable');
  return [url,asset==='./'?await navigationResponse(response):response];
 }));
 const cache=await caches.open(CACHE);
 await Promise.all(entries.map(([url,response])=>cache.put(url,response)));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const old=(await caches.keys()).filter(key=>key.startsWith('hidden-chess-')&&key!==CACHE);
 await Promise.all(old.map(key=>caches.delete(key)));
 await self.clients.claim();

})()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 if(event.request.mode==='navigate'){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE),cached=await cache.match(SHELL);
   if(cached)return navigationResponse(cached);
   const response=await fetch(new Request(SHELL,{cache:'reload',credentials:'same-origin'}));
   if(!response.ok)throw Error('Game page unavailable');
   const clean=await navigationResponse(response);
   event.waitUntil(cache.put(SHELL,clean.clone()));
   return clean;
  })());
  return;
 }
 // Cache only this release's known public assets; never room API data.
 if(!ASSETS.some(asset=>new URL(asset,self.registration.scope).href===url.href))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),cached=await cache.match(event.request);
  if(cached)return cached;
  const response=await fetch(event.request);
  if(response.ok)event.waitUntil(cache.put(event.request,response.clone()));
  return response;
 })());
});
self.addEventListener('message',event=>{
 if(event.data?.type!=='OFFLINE_STATUS'||!event.ports?.[0])return;
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  const ready=(await Promise.all(ASSETS.map(asset=>cache.match(new URL(asset,self.registration.scope).href)))).every(Boolean);
  event.ports[0].postMessage({ready});
 })());
});
