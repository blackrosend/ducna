const staticDucNA = "ducna-site-v1";
const assets = [
    "/",
    "/index.html",
    "/public/assets/css/style.css",
    "/public/assets/js/app.js",
    "/public/assets/js/index.js",
    "/public/images/coffee1.jpg",
    "/public/images/coffee2.jpg",
    "/public/images/coffee3.jpg",
    "/public/images/coffee4.jpg",
    "/public/images/coffee5.jpg",
    "/public/images/coffee6.jpg",
    "/public/images/coffee7.jpg",
    "/public/images/coffee8.jpg",
    "/public/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDucNA).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

self.addEventListener("fetch", fetchEvent => {
    console.log(fetchEvent.request);
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});

// Register event listener for the 'push' event.
self.addEventListener("push", function(event) {
    // Keep the service worker alive until the notification is created.
    event.waitUntil(
        // Show a notification with title 'D.App' and body 'new notification'.
        self.registration.showNotification("D.App", {
            body: "new notification"
        })
    );
});