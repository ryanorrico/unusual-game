
/**
 * @roxi/routify 2.7.3
 * File generated Mon Dec 07 2020 12:38:10 GMT-0700 (Mountain Standard Time)
 */

export const __version = "2.7.3"
export const __timestamp = "2020-12-07T19:38:10.897Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/admin/index",
          "id": "_admin_index",
          "component": () => import('../src/pages/admin/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/admin",
      "id": "_admin__layout",
      "component": () => import('../src/pages/admin/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "path": "/discussions/:slug/index",
              "id": "_discussions__slug_index",
              "component": () => import('../src/pages/discussions/[slug]/index.svelte').then(m => m.default)
            }
          ],
          "path": "/discussions/:slug"
        }
      ],
      "isLayout": true,
      "path": "/discussions",
      "id": "_discussions__layout",
      "component": () => import('../src/pages/discussions/_layout.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/login/index",
          "id": "_login_index",
          "component": () => import('../src/pages/login/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/login",
      "id": "_login__layout",
      "component": () => import('../src/pages/login/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "path": "/blog/:slug/index",
              "id": "_blog__slug_index",
              "component": () => import('../src/pages/blog/[slug]/index.svelte').then(m => m.default)
            }
          ],
          "path": "/blog/:slug"
        },
        {
          "isIndex": true,
          "isPage": true,
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "index": 2
      },
      "meta": {
        "index": 2,
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/blog",
      "id": "_blog__layout",
      "component": () => import('../src/pages/blog/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/:user_slug/index",
          "id": "__user_slug_index",
          "component": () => import('../src/pages/[user_slug]/index.svelte').then(m => m.default)
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "path": "/:user_slug/settings/index",
              "id": "__user_slug_settings_index",
              "component": () => import('../src/pages/[user_slug]/settings/index.svelte').then(m => m.default)
            }
          ],
          "path": "/:user_slug/settings"
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "index": 3
      },
      "meta": {
        "index": 3,
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/:user_slug",
      "id": "__user_slug__layout",
      "component": () => import('../src/pages/[user_slug]/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isIndex": true,
              "isPage": true,
              "path": "/podcast/:slug/index",
              "id": "_podcast__slug_index",
              "component": () => import('../src/pages/podcast/[slug]/index.svelte').then(m => m.default)
            }
          ],
          "path": "/podcast/:slug"
        },
        {
          "isIndex": true,
          "isPage": true,
          "path": "/podcast/index",
          "id": "_podcast_index",
          "component": () => import('../src/pages/podcast/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "index": 3
      },
      "meta": {
        "index": 3,
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/podcast",
      "id": "_podcast__layout",
      "component": () => import('../src/pages/podcast/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

