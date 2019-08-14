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
    "revision": "bad2ab878778a1cf1de2b49c551d751a"
  },
  {
    "url": "404/index.html",
    "revision": "277516d500f5a626f45993b33a8f18a1"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "94cd89135ca5222a8a42b82567fc1322"
  },
  {
    "url": "en/index.html",
    "revision": "42a5f70161b93aa5fbd5fa9d72500cf9"
  },
  {
    "url": "index.html",
    "revision": "f24e9cb41d094deb80f5ef1677cb22fc"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "197380f97b7144d5ddc675936ffbfbb8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a0fa57def141a96d9fa40c3157579b12"
  },
  {
    "url": "profile/index.html",
    "revision": "ffa52a2a6415ab886a265b464c77d920"
  },
  {
    "url": "tegami/index.html",
    "revision": "1639dbc100d6642f5c93da2616c1213b"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "bc2032a5cf5fbba353aa17a341635b9b"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "5cdf2a1ddd85670ca8643f283b63f2fa"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "d0ee47725fb74e8e131236bed6f18865"
  },
  {
    "url": "zh/index.html",
    "revision": "1db7a830bf5b23637877c5f594a5dd5a"
  },
  {
    "url": "0-5dfd9c9aac6da982d134.js"
  },
  {
    "url": "15-88ec53c793256c228047.js"
  },
  {
    "url": "app-dba9f4804f337c05b5dd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1e6e721320470e75717f.js"
  },
  {
    "url": "component---src-pages-404-tsx-69960269b00f4244546e.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-3368bf1386775125d3e1.js"
  },
  {
    "url": "component---src-pages-en-tsx-97c64644890c48ff9bbc.js"
  },
  {
    "url": "component---src-pages-index-tsx-04078d17d0924fbc971d.js"
  },
  {
    "url": "component---src-pages-index-tsx-247737b4e7d7f02d6305.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-3520e8bc227fdd9a0b4c.js"
  },
  {
    "url": "component---src-pages-profile-tsx-78038d2442e8bb20ceba.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-5068750956d2d819b577.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1beba5ba8f15627b198b.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-5938db511442f0a2819f.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-7235b4f68286067d8e33.js"
  },
  {
    "url": "component---src-pages-zh-tsx-8dc1eff672e67f1d2ebf.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "webpack-runtime-9627c8c5c52fe80f442e.js"
  },
  {
    "url": "webpack-runtime-f7aa5bf178f2facdc3a3.js"
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
  if (!resources || !(await caches.match(`/app-dba9f4804f337c05b5dd.js`))) {
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
