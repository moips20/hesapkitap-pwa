importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'document' ||
                   request.destination === 'script' ||
                   request.destination === 'style' ||
                   request.destination === 'image' ||
                   request.destination === 'font',
    new workbox.strategies.StaleWhileRevalidate()
  );
}
