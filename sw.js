// Retira el service worker antiguo de la raíz: la app vive ahora en /msm/ y /jasz/.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.delete('cuaderno-ibex-v1').then(() => self.registration.unregister()));
});
