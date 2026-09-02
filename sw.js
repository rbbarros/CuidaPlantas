// Nome do cache
const CACHE = "cuidaplanta-v1";

// Arquivos para salvar no cache (funcionar offline)
const ARQUIVOS = [
    "/",
    "/index.html",
    "/manifest.json",
    "/icons/icon-192.svg",
    "/icons/icon-512.svg"
];

// Quando instalar o service worker, salva os arquivos no cache
self.addEventListener("install", function(evento) {
    evento.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll(ARQUIVOS);
        })
    );
});

// Quando buscar algo, tenta o cache primeiro, senão vai na internet
self.addEventListener("fetch", function(evento) {
    evento.respondWith(
        caches.match(evento.request).then(function(resposta) {
            return resposta || fetch(evento.request);
        })
    );
});
