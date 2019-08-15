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
    "revision": "23406233d5ad7aa8e340c6ba74320b96"
  },
  {
    "url": "404/index.html",
    "revision": "eabd317d017d22dfba741208d4cb9658"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "94ccbee850107a74632e57c879f6d3a6"
  },
  {
    "url": "en/index.html",
    "revision": "a6372de1cc22cbe5f03f23ee6d9fae9c"
  },
  {
    "url": "index.html",
    "revision": "77ff95a97f14c39f0ef52f2f709f8512"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "7315ebffaf993ca4141015ddc3ef682b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c2c11c26779d8980b37f89e77fc6bf8e"
  },
  {
    "url": "profile/index.html",
    "revision": "036fa60de09d5b4006208108419923f7"
  },
  {
    "url": "tegami/index.html",
    "revision": "e85e027dad753c41f588ea6f651db1fa"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "7f710e0683c651ecac0b88bc7d4f38bd"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "c81a814d06b6350418bb17f063dfab21"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "6d4c18431a70fa61ea99e11120cd007e"
  },
  {
    "url": "zh/index.html",
    "revision": "ad7794ec11757e75a76f15c7394a01c7"
  },
  {
    "url": "0-410e2f9b38238861c8f8.js"
  },
  {
    "url": "0-5dfd9c9aac6da982d134.js"
  },
  {
    "url": "15-5df079b27e0ebd88bb88.js"
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
    "url": "component---src-pages-mamechishiki-tsx-3520e8bc227fdd9a0b4c.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-d2b52d0aa768b86fd48a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-1206ce9dccc4d7958fa7.js"
  },
  {
    "url": "component---src-pages-profile-tsx-78038d2442e8bb20ceba.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-5068750956d2d819b577.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1049e9e174443000b538.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1beba5ba8f15627b198b.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-5938db511442f0a2819f.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-dff9977007f4174d31a5.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-7235b4f68286067d8e33.js"
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
    "url": "idb-keyval-iife.min.js"
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
  if (!resources || !(await caches.match(`/app-b70cfc304da5e2882c8d.js`))) {
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
