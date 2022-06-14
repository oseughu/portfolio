import adapter from '@sveltejs/adapter-auto'
import { resolve } from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          $src: resolve('src'),
          $stores: resolve('src/stores'),
          $components: resolve('src/components')
        }
      }
    },

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
