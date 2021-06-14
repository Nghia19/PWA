const staticProducts = "PWA";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/img/product-1.jpg",
  "/img/product-2.jpg",
  "/img/product-3.jpg",
  "/img/product-4.jpg",
  "/img/product-5.jpg",
  "/img/product-6.jpg",
  "/img/product-7.jpg",
  "/img/product-8.jpg",
  "/img/product-9.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticProducts).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
