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
    "revision": "acee1375bd6d5fd2d4bf96c027d337f4"
  },
  {
    "url": "404/index.html",
    "revision": "f94f9305d0e8ee8cecd021126783fd07"
  },
  {
    "url": "dev/index.html",
    "revision": "4b8561be1ca5edd5376be211772c72b0"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "331a7a3e39554fc3f2a2bb938e77dba7"
  },
  {
    "url": "en/index.html",
    "revision": "bb408505a44e4ab902bac4dfc086fe85"
  },
  {
    "url": "index.html",
    "revision": "49e421e4b43f6f2f53ff6f40cf5f1506"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "9acf2881ac3bed268977ed0c4549f157"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "020376cd4ce371d36619a300b4088228"
  },
  {
    "url": "profile/index.html",
    "revision": "9ae4a6a2f9f2af263e092d0f5e49cb9f"
  },
  {
    "url": "tegami/index.html",
    "revision": "e1d6e5ead5120101cd0c0ed5b2853ab0"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "e45f7be62eede0ac0e25751e8d5f5fb6"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "4b0ba3f3a8e6706dc64d80b0dc67ecf5"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "3ff7fecad58513318413065efce2cce1"
  },
  {
    "url": "zh/index.html",
    "revision": "a60fa3876b32a8f761a03d2a418b05b2"
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
    "url": "app-5efe014cf698fa1d612d.js"
  },
  {
    "url": "app-9cb3adb9d00edd2e26a8.js"
  },
  {
    "url": "app-ffff372aae0fcedbeadb.js"
  },
  {
    "url": "commons-a346105e770216343dea.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7edd174020620717ab05.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-831055cf3b2f0bc68002.js"
  },
  {
    "url": "component---src-pages-404-tsx-76a9d3a2501f0744dcb9.js"
  },
  {
    "url": "component---src-pages-404-tsx-8d297fddbd9d77753269.js"
  },
  {
    "url": "component---src-pages-dev-tsx-2e906bf2bfa70db0627a.js"
  },
  {
    "url": "component---src-pages-dev-tsx-3366332c7b3bed85b955.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-0423f310df71196b4f01.js"
  },
  {
    "url": "component---src-pages-dumpdata-tsx-e8bad588670a294d5ff3.js"
  },
  {
    "url": "component---src-pages-en-tsx-1a92f1e328895559f919.js"
  },
  {
    "url": "component---src-pages-en-tsx-f38e0e874fc9b543adf8.js"
  },
  {
    "url": "component---src-pages-index-tsx-1d922e17302bead85ed7.js"
  },
  {
    "url": "component---src-pages-index-tsx-91978052222b832e6c11.js"
  },
  {
    "url": "component---src-pages-index-tsx-d16e530368a746b9cdc3.js"
  },
  {
    "url": "component---src-pages-index-tsx-fb4d2a2c58fe097169ec.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-758b389769e78ddd6676.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-c43315aef3116ef0359a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-044cdaf5416fe2595aab.js"
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
    "url": "component---src-pages-tegami-tsx-7ca810f3ffc1a8eb20e5.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-3c098722d52814a33185.js"
  },
  {
    "url": "component---src-pages-zh-cn-tsx-f58aef5f076a55a5320a.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-84c840e453fba90f952a.js"
  },
  {
    "url": "component---src-pages-zh-hans-c-2-tsx-d1c7e30f3f13e19a7489.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-2ba2c6671b99f0394ec7.js"
  },
  {
    "url": "component---src-pages-zh-hans-tsx-34cbcca49f92a05785a3.js"
  },
  {
    "url": "component---src-pages-zh-tsx-1e4a2f48a161202838c9.js"
  },
  {
    "url": "component---src-pages-zh-tsx-58546c117179e767d4f5.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-345ae1369e2c1086d782.js"
  },
  {
    "url": "styles-f45e1af43bc5c4bf5e74.js"
  },
  {
    "url": "webpack-runtime-508af31de5b5db7d877a.js"
  },
  {
    "url": "webpack-runtime-50e1af9405b382b27f11.js"
  },
  {
    "url": "webpack-runtime-5231d969abc547fae8a5.js"
  },
  {
    "url": "webpack-runtime-98532ec458d7a84acff3.js"
  },
  {
    "url": "webpack-runtime-e571d128eb83894e30e4.js"
  },
  {
    "url": "chunk-map.json",
    "revision": "c552207772ad08a11cc33ede007a9b24"
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
    "revision": "ea742bee81abbbe1fbefb05d8aa0f4b5"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "169eab7547b33734e9b04ca152c12d1c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "54c4b1843ebb7bd1d328631423f2e464"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "98011936eb376db032c9f986097bf071"
  },
  {
    "url": "page-data/dev/page-data.json",
    "revision": "8f75c5e685ebd2ba8b5675d622b29220"
  },
  {
    "url": "page-data/dumpdata/page-data.json",
    "revision": "7b7b61c14e22c73e63daa1ca75d09f67"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "3ad114ab0380019c540b97b9dfa02564"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b62b9344c50dcedd5ba120c9b829a46c"
  },
  {
    "url": "page-data/mamechishiki/page-data.json",
    "revision": "10246c3e2006b1939762a5ce16257276"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d274adf0f008ef152ce70a312b04b730"
  },
  {
    "url": "page-data/profile/page-data.json",
    "revision": "d8c08e9bbceaa187af22f467a1cf8b1d"
  },
  {
    "url": "page-data/tegami/page-data.json",
    "revision": "c0b68aeb659d4c7d9fd8bff76216180d"
  },
  {
    "url": "page-data/zh-cn/page-data.json",
    "revision": "048a59951bab3385374794ec316ffdc5"
  },
  {
    "url": "page-data/zh-hans-c2/page-data.json",
    "revision": "0ef2ce8a357c6f7a6cb223052de66f0b"
  },
  {
    "url": "page-data/zh-hans/page-data.json",
    "revision": "48ed87ccd25cd9e54c7c11577f0091a8"
  },
  {
    "url": "page-data/zh/page-data.json",
    "revision": "91cb3f2e96f01ca0dff5629f7272e6e1"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d2f1814a787894f612bb1cae49600bfd"
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
  if (!resources || !(await caches.match(`/app-5efe014cf698fa1d612d.js`))) {
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
