const CACHE_NAME="viargr-v19.12.3";
const ASSETS=["./","./index.html","./manifest.json","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",(e)=>{e.waitUntil((async()=>{const c=await caches.open(CACHE_NAME);await c.addAll(ASSETS);self.skipWaiting();})());});
self.addEventListener("activate",(e)=>{e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):Promise.resolve()));self.clients.claim();})());});
self.addEventListener("fetch",(e)=>{e.respondWith((async()=>{const cached=await caches.match(e.request);if(cached)return cached;try{return await fetch(e.request);}catch(err){if(e.request.mode==="navigate"){const fb=await caches.match("./index.html");if(fb)return fb;}throw err;}})());});
