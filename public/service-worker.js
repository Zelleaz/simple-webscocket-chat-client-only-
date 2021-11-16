const CACHE_NAME = 'cache-v1';

const self = this;

self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key)
                        return caches.delete(key);
                    }
                }))
            )
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                fetch('assets-manifest.json')
                    .then(res => {
                        res.json()
                    })
                    .then(assets => {
                        const UrlsToCache = [
                            '/',
                            '/favicon.ico',
                            '/spyware.png',
                            '/user.png',
                            assets['main.css'],
                            assets['main.js']
                        ]
                        return cache.addAll(UrlsToCache)
                    })

            })
            .catch(e => console.error(e))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                if (res) {
                    return res;
                }

                return fetch(event.request).then(
                    res => {
                        if(!res || res.status !== 200 || res.type !== 'basic') {
                            return res;
                        }
                        const responseToCache = res.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return res;
                    }
                );
            })
    );
});