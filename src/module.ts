import { createResolver, defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// Module options TypeScript inteface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-clarity-analytics',
    configKey: 'clarity',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.hook('nitro:config', config => {
      config.plugins = config.plugins || []
      config.plugins.push(resolve(runtimeDir, 'server', 'plugins', 'clarity'))
    })
  }
})
