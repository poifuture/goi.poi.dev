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
    "revision": "23df9e93ec0ac18f66eea35a52eeb9ab"
  },
  {
    "url": "404/index.html",
    "revision": "9a422140ba3db6e5d854759fbd12a2fc"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "c0ead5d2b39ec397b7786534f0276d0a"
  },
  {
    "url": "en/index.html",
    "revision": "fee3b3e02f336955edc85528619d1ae6"
  },
  {
    "url": "index.html",
    "revision": "91dd805cf8716e861652065b5a14e270"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "74da3107dfcff16160b59761f505e938"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e8f374a5eb64a7444e43aa5490cbe67b"
  },
  {
    "url": "profile/index.html",
    "revision": "8f23d7192631c4893d775d503e757db3"
  },
  {
    "url": "tegami/index.html",
    "revision": "285a46dbfcd132ab8c45b78c641ccbd5"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "08b44238c0aa6dbe0494615718b3602d"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "8486c09864f1347306b4357db76de4cd"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "4ad689ea7a38e09cc8dc0e4a16b0318d"
  },
  {
    "url": "zh/index.html",
    "revision": "787276f25e300687602c3cb0a224d504"
  },
  {
    "url": "0-414313ec6401db584e36.js"
  },
  {
    "url": "15-e9c7064ba321d4585d8b.js"
  },
  {
    "url": "app-00fd86a99b52560fd9d4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d7219d4244a95418be79.js"
  },
  {
    "url": "component---src-pages-404-tsx-53268bcbf8ea2b2ad2ba.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-91f63cc0e6b511007821.js"
  },
  {
    "url": "component---src-pages-en-tsx-fc5428e1ffe52a87b4b4.js"
  },
  {
    "url": "component---src-pages-index-tsx-31fc9733f696f344c3a6.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-1d2a5d7950eaa46670dc.js"
  },
  {
    "url": "component---src-pages-profile-tsx-fa6c0c7acffc0cacac81.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-e0f69129a14a711f8a92.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-1f3a0a33e23c1cb58fbb.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-735ec805f5c9e5889665.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-fbc823258d4d77187650.js"
  },
  {
    "url": "component---src-pages-zh-tsx-8b672a62eefbd9689caa.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "webpack-runtime-031c32ca2d28f9367d72.js"
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
  if (!resources || !(await caches.match(`/app-00fd86a99b52560fd9d4.js`))) {
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
