const CACHE_NAME = "game-cache-v1";
// Yahan hum game aur three.js ko cache (save) kar rahe hain
const ASSETS = [
    "./offline-game.html", 
    "./three.min.js"
];

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Jab user net bina kuch open karega, toh ye usko game wale page par bhej dega
self.addEventListener("fetch", (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match("./offline-game.html"); // Net band hone par game khulega
        })
    );
});
