/* Apps Inovelar — só permite instalar o ícone (não guarda nada, não intercepta nada). */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
