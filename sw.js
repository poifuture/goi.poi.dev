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
    "revision": "61eaef739860f941eb9ea6a6bc7058eb"
  },
  {
    "url": "404/index.html",
    "revision": "a7aefcf6bdd9520455b2743958a7c40e"
  },
  {
    "url": "dev/index.html",
    "revision": "2c30749e77934f7a14ceea28e2ac59e8"
  },
  {
    "url": "dumpdata/index.html",
    "revision": "5218ebb12259d8651c3d290fd66d44b9"
  },
  {
    "url": "en/index.html",
    "revision": "1c3b397aca57ef1dc29ace279100fa49"
  },
  {
    "url": "index.html",
    "revision": "5f5ad305139133691f57f7cb681d5201"
  },
  {
    "url": "mamechishiki/index.html",
    "revision": "16cf010aa64ef9e56a1b5a2d6da4eb9d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "94f0735036d4b5c8898021bd3ea1c490"
  },
  {
    "url": "profile/index.html",
    "revision": "b7afdf5c9f6a721f4391616dc01e70eb"
  },
  {
    "url": "tegami/index.html",
    "revision": "193464217b9dcdf54f1f2c278fcb74a3"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "147a68f4ce861aaab19e7e9ff0380705"
  },
  {
    "url": "zh-hans-c2/index.html",
    "revision": "3ccc7d5da406963ba46debe4ac43061a"
  },
  {
    "url": "zh-hans/index.html",
    "revision": "c91bd55f80d5ee15506db7d11e761e56"
  },
  {
    "url": "zh/index.html",
    "revision": "87f0710de156d02e2713d58510b3e178"
  },
  {
    "url": "0-595e543fc8bd72881b28.js"
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
    "url": "18-ce45a520f5236b850602.js"
  },
  {
    "url": "app-3453e36e5f307a71ebb2.js"
  },
  {
    "url": "app-9cb3adb9d00edd2e26a8.js"
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
    "url": "component---src-pages-index-tsx-1d922e17302bead85ed7.js"
  },
  {
    "url": "component---src-pages-index-tsx-70278c1af8ac0a647b82.js"
  },
  {
    "url": "component---src-pages-mamechishiki-tsx-c43315aef3116ef0359a.js"
  },
  {
    "url": "component---src-pages-profile-tsx-2cf13b5eef70d867f924.js"
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
    "url": "webpack-runtime-98532ec458d7a84acff3.js"
  },
  {
    "url": "webpack-runtime-cc348bf62c22a94f9132.js"
  },
  {
    "url": "chunk-map.json",
    "revision": "9e816083cd333583e842f68e46345e24"
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
    "revision": "becd4071278e4c3157ff582828647b7b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "819551f0f76f838b2c39c0228f20f69f"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "05ab2a7c447ec01975cc7a2d68849c86"
  },
  {
    "url": "page-data/dev/page-data.json",
    "revision": "ff7687fa93b69ea06ac34835995b191d"
  },
  {
    "url": "page-data/dumpdata/page-data.json",
    "revision": "544d805907838b1271ad99054be24703"
  },
  {
    "url": "page-data/en/page-data.json",
    "revision": "aedc3f62c575ae2fe6595ef1eff8d354"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7a75a0c2c6799f30fd87c69b5a1ed1bb"
  },
  {
    "url": "page-data/mamechishiki/page-data.json",
    "revision": "587321aa7095bfd39f37f08d5cbb105a"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "878f376c9297ec2ccd38bb8207c3d218"
  },
  {
    "url": "page-data/profile/page-data.json",
    "revision": "62feb69e589a4410718864911afdd9cc"
  },
  {
    "url": "page-data/tegami/page-data.json",
    "revision": "dcda8840db13a9b1de33afe198fe1cf2"
  },
  {
    "url": "page-data/zh-cn/page-data.json",
    "revision": "ff7f605b0193688794f07f5d21f253c8"
  },
  {
    "url": "page-data/zh-hans-c2/page-data.json",
    "revision": "2806e42dd722d8122e7cb6fa9c05c4f3"
  },
  {
    "url": "page-data/zh-hans/page-data.json",
    "revision": "54b40225847438dcadda7144daa916f1"
  },
  {
    "url": "page-data/zh/page-data.json",
    "revision": "e4c962ad67e0298cf81183f30972d029"
  },
  {
    "url": "webpack.stats.json",
    "revision": "4a6c669caa39a9f0e3b4657383fdf954"
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
  if (!resources || !(await caches.match(`/app-9cb3adb9d00edd2e26a8.js`))) {
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
