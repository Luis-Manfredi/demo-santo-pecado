'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "40c6347e2de5c3a10d14ca23640895a6",
"assets/assets/fonts/Bacalisties.ttf": "9a7927751df300f137ecadcd39ec25ed",
"assets/assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "3ebc1a21c12a3051dcdd80e7605eb630",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/images/alas-sp.png": "c50eae7d449ffc7562a6b2e163278fff",
"assets/assets/images/appbar-bg.png": "fb8352c2fd4d3ecb86ad8d74c5d89aa6",
"assets/assets/images/bestway-black.png": "35b1cc9d34a44b0097500ac7aa2d73b8",
"assets/assets/images/bwm3.png": "7ca15ac28e0e7ae2c9f0257ba0f6b889",
"assets/assets/images/deliveries.svg": "d60a591fb3c549ab7433ddc2156a25e0",
"assets/assets/images/dish_example.jpg": "33b8ffc81cd025ea073bf5ef6fcf0f9a",
"assets/assets/images/fondo-curvas.png": "791c43a6ed6086b67a87dac7d4978268",
"assets/assets/images/fondo-curvas2.png": "04d352954821dd9f1ea19b57ece9cb0c",
"assets/assets/images/fondo-curvas3.png": "791c43a6ed6086b67a87dac7d4978268",
"assets/assets/images/lineas-esquinas%25201.png": "6c4554db15812637a8ea41c34b853df4",
"assets/assets/images/lineas-esquinas%25202.png": "275a957b0e87a89033bf0aa5eb7c7662",
"assets/assets/images/plato_1_cover.jpg": "2595d8f419dc6d12ed24e78d0c6bdfd0",
"assets/assets/images/plato_1_thumbnail.jpg": "4b6c34e498d012a3ada38be1c891a9f0",
"assets/assets/images/plato_2_compressed_edited.jpg": "22ba19ae7bd10849cdc8ef772dd0989e",
"assets/assets/images/plato_3_thumbnail.jpg": "40ff8020beefc7072082f67efeded85c",
"assets/assets/images/post/sp-post-1.jpg": "1740ae4409d6389136ee5a5896160e3f",
"assets/assets/images/post/sp-post-2.jpg": "637c19bd93f6c5db291de098d053e37a",
"assets/assets/images/post/sp-post-3.jpg": "d8187d0bae1d1d18c92dcf7237a5d369",
"assets/assets/images/splash-sp-logo.png": "17bea5f40fb5526d136a2cef481040f9",
"assets/FontManifest.json": "fbc98602c2572a4bf56e5644f3da1564",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "489dc2e9fec7e74be720c51e6495bbd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "bb28a58151e39bbd5f260e88e49c119b",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45bdd0f6bc6eda3c1c1f74990ecbd0c9",
"/": "45bdd0f6bc6eda3c1c1f74990ecbd0c9",
"main.dart.js": "010f6e267a41b0b71f9a285a40e64e92",
"manifest.json": "8c0017cefacd271c0eb7194b135e7498",
"splash/img/dark-1x.png": "0d88bcf26f256408379647ade5db868a",
"splash/img/dark-2x.png": "887aecb81c4ff45944f0a1992f063cfe",
"splash/img/dark-3x.png": "6b8c27df5f25d6a6ededb0f57e7a2752",
"splash/img/dark-4x.png": "27f8ff97bceaa8452995523fdeaa7470",
"splash/img/light-1x.png": "0d88bcf26f256408379647ade5db868a",
"splash/img/light-2x.png": "887aecb81c4ff45944f0a1992f063cfe",
"splash/img/light-3x.png": "6b8c27df5f25d6a6ededb0f57e7a2752",
"splash/img/light-4x.png": "27f8ff97bceaa8452995523fdeaa7470",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "2a6f96070aa0ff8d15dcdb514eff0500",
"version.json": "0c75329b1c0a25784795d292165a8549"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
