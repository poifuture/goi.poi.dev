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
    "revision": "4111436725ea84acd7b2894a4c527971"
  },
  {
    "url": "404/index.html",
    "revision": "5aabf59a1bfd2b80e6db8cedeed78b1c"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "9e61c4b9eaa1f7998a983cc7c93fedff"
  },
  {
    "url": "en/index.html",
    "revision": "abf7a99319a67177c790844d9c3f88d7"
  },
  {
    "url": "index.html",
    "revision": "39426f50bb08ece898d08798350b2280"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "a34c995a59b664df4bbeaf6c6d87bfc2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f9bf9426225fb9143c5aa03518469a9b"
  },
  {
    "url": "profile/index.html",
    "revision": "fdb6b326abaa582c77df6c424b6f2c6c"
  },
  {
    "url": "tegami/index.html",
    "revision": "c9f9ee06e277bdd6df297e8048dd0483"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "abb86669dce39bd1dbbde11e8f724e6d"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "0238e178b8f98b9a2c63af1e90f8b35d"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "f4b53ff2fad5c04fe6203ebe36cc5efc"
  },
  {
    "url": "zh/index.html",
    "revision": "61bec402fd1b2ab6c772f4358814fbd6"
  },
  {
    "url": "0-d9b3be18ed1e05adc4e2.js"
  },
  {
    "url": "0-e0af7bd808c3704bcc7a.js"
  },
  {
    "url": "0-f95f93a1c9c2f541f29e.js"
  },
  {
    "url": "15-2ea0f9e150ce2b4214b0.js"
  },
  {
    "url": "15-8bead08302ad74218e4e.js"
  },
  {
    "url": "15-add3243a480e6ca0b0e3.js"
  },
  {
    "url": "app-033250021b6237fd8fcd.js"
  },
  {
    "url": "app-047693f8c6f545964425.js"
  },
  {
    "url": "app-127f3a26b0e2009efaaf.js"
  },
  {
    "url": "app-7d068a19f91d625393c0.js"
  },
  {
    "url": "app-92081e5ae3df161418b8.js"
  },
  {
    "url": "app-9ff20089be847e261a39.js"
  },
  {
    "url": "app-b11f676093b0f620db89.js"
  },
  {
    "url": "app-bb42c83882d0acf5629c.js"
  },
  {
    "url": "app-d526a081861bac1c9e97.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-22d5888b5f26c675c95e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ea1358a0f7095693abb7.js"
  },
  {
    "url": "component---src-pages-404-tsx-53268bcbf8ea2b2ad2ba.js"
  },
  {
    "url": "component---src-pages-404-tsx-913fb8f28ef7f30167d2.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-3748e7187496ae3c9818.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-75abdf7242acfeae8333.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-ee720c3a62813b4a6678.js"
  },
  {
    "url": "component---src-pages-en-tsx-09db0e7b0319e372ed1d.js"
  },
  {
    "url": "component---src-pages-en-tsx-b52395daad8657749d82.js"
  },
  {
    "url": "component---src-pages-index-tsx-65aad2068da056bf682e.js"
  },
  {
    "url": "component---src-pages-index-tsx-738a56801e8bc97f5870.js"
  },
  {
    "url": "component---src-pages-index-tsx-a6746e99f93795d667f9.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-1a6fbf596354525de680.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-ef6c5b4bc320b7b51e60.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-f94f2d7cd1cdfb4317fa.js"
  },
  {
    "url": "component---src-pages-profile-tsx-1426975572810315706d.js"
  },
  {
    "url": "component---src-pages-profile-tsx-87d8cbe446d5497f59b6.js"
  },
  {
    "url": "component---src-pages-profile-tsx-fdfa7b12a8a1552d5e2d.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-435f2d57b4a6208accec.js"
  },
  {
    "url": "component---src-pages-tegami-tsx-aa8a26b89b60483a009b.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-56e0a602c92b8d70ed1d.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-ba162b0e5facbc654de0.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-c9dea1fce7210c3ed83b.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-590abd78692b13441e7a.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-7059e0df1f605cb3489f.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-88786ee0dd06e504fbd6.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-3ca63fdfc9c9e11af929.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-4e61036d7b7c682c8a14.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-f93a15b26cf10daf6103.js"
  },
  {
    "url": "component---src-pages-zh-tsx-a228d1420cae51bd068c.js"
  },
  {
    "url": "component---src-pages-zh-tsx-b67f8462f959e692eb07.js"
  },
  {
    "url": "component---src-pages-zh-tsx-fd623970eb69322752cc.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "webpack-runtime-0b088a3ee62701cc28c4.js"
  },
  {
    "url": "webpack-runtime-89a0da11d9b278b2bd92.js"
  },
  {
    "url": "webpack-runtime-b9ea3c6aeed5fe5754ae.js"
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
  if (!resources || !(await caches.match(`/app-7d068a19f91d625393c0.js`))) {
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
