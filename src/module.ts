import { createResolver, defineNuxtModule, addServerPlugin, updateRuntimeConfig, addImports, addImportsDir } from '@nuxt/kit'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-clarity-analytics',
    configKey: 'clarity',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {},
  setup() {
    const { resolve } = createResolver(import.meta.url)

    updateRuntimeConfig({
      clarityId: ''
    })

    addImportsDir(resolve('./runtime/app/utils'))

    addServerPlugin(resolve('./runtime/server/plugins/clarity.ts'))
  },
})
