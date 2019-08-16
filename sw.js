/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5e655c5efa68ce2421c1bca51312a4ea"
  },
  {
    "url": "404/index.html",
    "revision": "2390103fdc277ef243db09eb6935bd95"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "07dcf66bdd4d1c2caee449644844f916"
  },
  {
    "url": "en/index.html",
    "revision": "0cd2a1914182c48cd2b74b7958f06caf"
  },
  {
    "url": "index.html",
    "revision": "c549a8d4b12692ca138c4ef43f569900"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "67db86e749a5db93e406fbc8175a0de7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "308dc0f0edf48c3e07fce6f91c46cb09"
  },
  {
    "url": "profile/index.html",
    "revision": "2c3c35d8b4dddf17d10fa0bf38aa7b5a"
  },
  {
    "url": "tegami/index.html",
    "revision": "95dd93b42a78c31266ad904dc9b471ad"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "62a9cf80e5a1526d680ad30b7768ef33"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "544d84f0475a21ad2eb43ee841e081f4"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "fdd2c13f6b5cb8ca580122ab2088ecf7"
  },
  {
    "url": "zh/index.html",
    "revision": "a1e8b7cb3a4dbe1f57392e3a26ebb01a"
  },
  {
    "url": "0-410e2f9b38238861c8f8.js"
  },
  {
    "url": "0-5dfd9c9aac6da982d134.js"
  },
  {
    "url": "0-974792ba5a40044f808d.js"
  },
  {
    "url": "15-5df079b27e0ebd88bb88.js"
  },
  {
    "url": "15-5e4d951c788d122d5e96.js"
  },
  {
    "url": "15-88ec53c793256c228047.js"
  },
  {
    "url": "app-b70cfc304da5e2882c8d.js"
  },
  {
    "url": "app-dba9f4804f337c05b5dd.js"
  },
  {
    "url": "app-dd88850570b5096de31d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1e6e721320470e75717f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a193e22285b846a80916.js"
  },
  {
    "url": "component---src-pages-404-tsx-2d128330e2fdbcc0eaae.js"
  },
  {
    "url": "component---src-pages-404-tsx-69960269b00f4244546e.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-107c21616828ba8c922d.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-3368bf1386775125d3e1.js"
  },
  {
    "url": "component---src-pages-en-tsx-2503d6ac605b4885433a.js"
  },
  {
    "url": "component---src-pages-en-tsx-97c64644890c48ff9bbc.js"
  },
  {
    "url": "component---src-pages-en-tsx-aa1a281cee6870000a71.js"
  },
  {
    "url": "component---src-pages-index-tsx-04078d17d0924fbc971d.js"
  },
  {
    "url": "component---src-pages-index-tsx-247737b4e7d7f02d6305.js"
  },
  {
    "url": "component---src-pages-index-tsx-715716b02b762c6c2c19.js"
  },
  {
    "url": "component---src-pages-index-tsx-9a825aea79b3f20d5238.js"
  },
  {
    "url": "component---src-pages-index-tsx-f956cf59f74da41d7b4b.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-3520e8bc227fdd9a0b4c.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-9c4d2f5ee2ccce994441.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-d2b52d0aa768b86fd48a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-1206ce9dccc4d7958fa7.js"
  },
  {
    "url": "component---src-pages-profile-tsx-1ecf972d5ee68bdcacb4.js"
  },
  {
    "url": "component---src-pages-profile-tsx-78038d2442e8bb20ceba.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-5068750956d2d819b577.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-76ad0868434974456f7c.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1049e9e174443000b538.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1beba5ba8f15627b198b.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-ef3956a2c931378adcc4.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-5938db511442f0a2819f.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-7d12586e6530d429abf5.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-dff9977007f4174d31a5.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-7235b4f68286067d8e33.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-b6d983151b403c5d4a24.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-d9972c89b83f3352265a.js"
  },
  {
    "url": "component---src-pages-zh-tsx-35b369f59dbdb101cc3d.js"
  },
  {
    "url": "component---src-pages-zh-tsx-8dc1eff672e67f1d2ebf.js"
  },
  {
    "url": "component---src-pages-zh-tsx-c2736964a53f7312248e.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "webpack-runtime-44b5a458cde645180aa9.js"
  },
  {
    "url": "webpack-runtime-7e982252a798890b68be.js"
  },
  {
    "url": "webpack-runtime-9627c8c5c52fe80f442e.js"
  },
  {
    "url": "webpack-runtime-f7aa5bf178f2facdc3a3.js"
  },
  {
    "url": "webpack-runtime-f84c03efcc2c8ec6c051.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0870f57b95163b53caaac90bd5bc3317"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreUrlParametersMatching": [/./]
});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-dd88850570b5096de31d.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
