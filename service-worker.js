const CACHE_NAME = "vision-cache-v1";
const urlsToCache = [
  "/vision/",
  "/vision/index.html",
  "/vision/manifest.json"
];

// 설치 단계에서 파일 캐싱
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// fetch 요청 캐싱에서 먼저 가져오기
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
