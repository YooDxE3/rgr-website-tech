const CACHE_NAME="viargr-v20.13.6"; // Versão atualizada para forçar atualização no celular
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE_NAME);
    await c.addAll(ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : Promise.resolve()));
    self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  e.respondWith((async () => {
    // Tenta rede primeiro, se falhar, vai pro cache (Estratégia Network-First para HTML)
    if (e.request.mode === "navigate") {
      try {
        return await fetch(e.request);
      } catch (err) {
        return await caches.match("./index.html");
      }
    }
    // Para outros arquivos (CSS, JS, Imagens), Cache-First
    const cached = await caches.match(e.request);
    if (cached) return cached;
    return await fetch(e.request);
  })());
});