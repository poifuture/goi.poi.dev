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
    "revision": "8d938348391be2c1832c48faccfcc5c4"
  },
  {
    "url": "404/index.html",
    "revision": "9154292cf736f6b09c5c9befa991dba1"
  },
  {
    "url": "dev/index.html",
    "revision": "b538b33a78217d3e7efa3bc9f6aad400"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "dbf2ac7d90492f689a575a8df4c356d3"
  },
  {
    "url": "en/index.html",
    "revision": "ce34944ca5987cec5b1af643d3edd93d"
  },
  {
    "url": "index.html",
    "revision": "30719662e38ca01b6bfa652eff78421c"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "fdd1d888c45fd14d114b8bc6cd00bd92"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9a93d04e9eb737c802d2cf7128eddadf"
  },
  {
    "url": "profile/index.html",
    "revision": "d23377acd95e761663e1502d7ada2a6b"
  },
  {
    "url": "tegami/index.html",
    "revision": "2f7ab05dee6185a050b0fb728557d3d2"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "172b62b15d1df552ca0d3f4d932f9f9a"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "41f542e75ee0a00474d001b6c0adf95b"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "7eaf623c258cc11907daf930a8f12d78"
  },
  {
    "url": "zh/index.html",
    "revision": "4de58a5bea77fa49e36e2fa7d95e9bd1"
  },
  {
    "url": "0-595e543fc8bd72881b28.js"
  },
  {
    "url": "1-6eeb44888772f43a1284.js"
  },
  {
    "url": "18-ce45a520f5236b850602.js"
  },
  {
    "url": "app-3453e36e5f307a71ebb2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7edd174020620717ab05.js"
  },
  {
    "url": "component---src-pages-404-tsx-8d297fddbd9d77753269.js"
  },
  {
    "url": "component---src-pages-dev-tsx-3366332c7b3bed85b955.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-e8bad588670a294d5ff3.js"
  },
  {
    "url": "component---src-pages-en-tsx-f38e0e874fc9b543adf8.js"
  },
  {
    "url": "component---src-pages-index-tsx-05a52bb45a0a7aa59f67.js"
  },
  {
    "url": "component---src-pages-index-tsx-70278c1af8ac0a647b82.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-c43315aef3116ef0359a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-7f18393b2bd2969f1d7b.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-17c600d62413883ebdec.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-3c098722d52814a33185.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-84c840e453fba90f952a.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-2ba2c6671b99f0394ec7.js"
  },
  {
    "url": "component---src-pages-zh-tsx-1e4a2f48a161202838c9.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-f45e1af43bc5c4bf5e74.js"
  },
  {
    "url": "webpack-runtime-76ade09672ed1ee020f5.js"
  },
  {
    "url": "webpack-runtime-cc348bf62c22a94f9132.js"
  },
  {
    "url": "chunk-map.json",
    "revision": "6d649b2717e63b43ffff64949b91df1d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "405e4023a2a56ee70b0febe916e29dc2"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "f340ed090f540f2f65d0b38465a997d2"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "80b35278d148323fa089f1821ae0674b"
  },
  {
    "url": "page-data/dev/page-data.json",
    "revision": "06d54bb4322726557b6304279bd0b803"
  },
  {
    "url": "page-data/dumpdata/page-data.json",
    "revision": "7ff2d8e22e70d4faf942799983e76ce1"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "cec81613c0e02a8a0df0bcaa42a95835"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9b242c25369ce32fdfc373a476512819"
  },
  {
    "url": "page-data/mamechishiki/page-data.json",
    "revision": "94fd8cc9707395ff2128fd834540ba37"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "a4b8f4a4dc758bfee1b5b586d45179b3"
  },
  {
    "url": "page-data/profile/page-data.json",
    "revision": "12cd28bea0efbb0211cd3b0654bc92ef"
  },
  {
    "url": "page-data/tegami/page-data.json",
    "revision": "401c3de9895a22759c7f4484b20a9649"
  },
  {
    "url": "page-data/zh-cn/page-data.json",
    "revision": "769d7d08e13b038c2c01e853428ff35c"
  },
  {
    "url": "page-data/zh-hans-c2/page-data.json",
    "revision": "b9693aab4d5263114000e1dfbd61dd76"
  },
  {
    "url": "page-data/zh-hans/page-data.json",
    "revision": "c19bbded74c5a2811d4c8db3f1b1e9e8"
  },
  {
    "url": "page-data/zh/page-data.json",
    "revision": "13c6abb1dbd7c80ce9a533821a0a5db5"
  },
  {
    "url": "webpack.stats.json",
    "revision": "da772f9bd67f41c04cdd7d7aa21c7f09"
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
  if (!resources || !(await caches.match(`/app-3453e36e5f307a71ebb2.js`))) {
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
