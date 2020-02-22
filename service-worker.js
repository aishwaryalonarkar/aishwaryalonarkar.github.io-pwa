// console.log("lll")/static/js/sw.js
const cacheName='name1';
const staticAssets=[

    'manifest.json',
    'index.html',
    'index.js',
];
self.addEventListener('install',async e =>
{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});
self.addEventListener('active', e =>
{
    self.clients.claim();
});

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});

