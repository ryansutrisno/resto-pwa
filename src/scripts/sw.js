import 'regenerator-runtime';
import ChacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(ChacheHelper.cachingAppShell([...assets, './']));
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(ChacheHelper.deleteOldCache());
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(ChacheHelper.revalidateCache(event.request));
});
