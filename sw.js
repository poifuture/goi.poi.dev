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
    "revision": "e70520201bbff26e382baa5aaab8929b"
  },
  {
    "url": "404/index.html",
    "revision": "4d9dca044d8c45ee3f4e87fbcc51220e"
  },
  {
    "url": "dev/index.html",
    "revision": "c0e7d60b0a1180d1ea0f6e61be536071"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "860a6c04fb267a8819a97a47101734eb"
  },
  {
    "url": "en/index.html",
    "revision": "b7766f317df1be47c6d378357176b25f"
  },
  {
    "url": "index.html",
    "revision": "e923854be3a08469b785e4e190b2b0fd"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "092868777a33cfcd7716a4cd5ec23d30"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b3f83297d8e20e5f863be13b7e021527"
  },
  {
    "url": "profile/index.html",
    "revision": "438ecb75476aa88df9ed2920a72182dd"
  },
  {
    "url": "tegami/index.html",
    "revision": "12700055f65b9063335a73d88da7a464"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "26b4d6fb80b6cb631e0c8b3434e1a446"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "8d16b06ed21635a3007132d833ed016e"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "efe9ea6fbc2af807b14d07ed597533c7"
  },
  {
    "url": "zh/index.html",
    "revision": "e499a70feb0ead8730cfc57396fb177e"
  },
  {
    "url": "0-97cb340079186fb6ac6e.js"
  },
  {
    "url": "1-6eeb44888772f43a1284.js"
  },
  {
    "url": "18-bf25f2d915209a16939b.js"
  },
  {
    "url": "app-9cb3adb9d00edd2e26a8.js"
  },
  {
    "url": "app-ffff372aae0fcedbeadb.js"
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
    "url": "component---src-pages-index-tsx-1d922e17302bead85ed7.js"
  },
  {
    "url": "component---src-pages-index-tsx-d16e530368a746b9cdc3.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-c43315aef3116ef0359a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-2cf13b5eef70d867f924.js"
  },
  {
    "url": "component---src-pages-profile-tsx-450ada78ee0dd3b2f76f.js"
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
    "url": "webpack-runtime-508af31de5b5db7d877a.js"
  },
  {
    "url": "webpack-runtime-5231d969abc547fae8a5.js"
  },
  {
    "url": "webpack-runtime-98532ec458d7a84acff3.js"
  },
  {
    "url": "chunk-map.json",
    "revision": "ead2e2a49143a171b2f83d166199ea67"
  },
  {
    "url": "locales/zh-hans-c2/CommandsBar.json",
    "revision": "eddbfef3723246dae16ee0bc3959bbe7"
  },
  {
    "url": "locales/zh-hans-c2/LandingPage.json",
    "revision": "d51fe8dfa0e507a0eed9579f9af7a7a6"
  },
  {
    "url": "locales/zh-hans/LandingPage.json",
    "revision": "b6988c07c8294e3ab9be366518eea987"
  },
  {
    "url": "locales/zh/CommandsBar.json",
    "revision": "6a110a7410f1ad6c3e483311e1af0448"
  },
  {
    "url": "locales/zh/Common.json",
    "revision": "a08cecaf812868ffc526adc4b558573c"
  },
  {
    "url": "locales/zh/GoiTester.json",
    "revision": "369fd8fd18c610a11f782d4279db764b"
  },
  {
    "url": "locales/zh/LandingPage.json",
    "revision": "9cc5214698f3fed771cf09daee7e59c1"
  },
  {
    "url": "locales/zh/WordAdder.json",
    "revision": "075ca1a0e5c6f2cc304312cafafc4c7e"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "a81452dc95c5af92651fbd644e78936a"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "8ca6e3c9738a7a5dec8c6af0765926cc"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "211d6f6cba470223565065eea59427fb"
  },
  {
    "url": "page-data/dev/page-data.json",
    "revision": "c89bc533a49841224516f7f0c6cbb235"
  },
  {
    "url": "page-data/dumpdata/page-data.json",
    "revision": "b80b13e0605d1f41b4472f799d51f32b"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "3b82e1cbfa349513468e2f7e5ba9bb6b"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b84a8bbcaed9deb5eefe1c69667f799a"
  },
  {
    "url": "page-data/mamechishiki/page-data.json",
    "revision": "bc3917273ccd713dc0a62204510665b7"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "8ff462b2795c9f09cb393bb0efe7b668"
  },
  {
    "url": "page-data/profile/page-data.json",
    "revision": "f54db493a9ec19e9ee27b1be8ba6ab60"
  },
  {
    "url": "page-data/tegami/page-data.json",
    "revision": "e660d1a69423ddee342683928dd7e8ec"
  },
  {
    "url": "page-data/zh-cn/page-data.json",
    "revision": "27840f81d5ed712284f0c9c970fdce38"
  },
  {
    "url": "page-data/zh-hans-c2/page-data.json",
    "revision": "651c09fefa2b40c1ffc0a368892de7ff"
  },
  {
    "url": "page-data/zh-hans/page-data.json",
    "revision": "f6009bebe5713cbc6aae1ed3ce196300"
  },
  {
    "url": "page-data/zh/page-data.json",
    "revision": "3353b8c12656d2b5af45a7381842f89d"
  },
  {
    "url": "webpack.stats.json",
    "revision": "823e1b24949d8e1314ac92fc00e9b00f"
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
  if (!resources || !(await caches.match(`/app-ffff372aae0fcedbeadb.js`))) {
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
