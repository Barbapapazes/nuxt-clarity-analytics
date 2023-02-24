import { describe, it, expect, vi } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr without Clarity', async () => {
  vi.stubEnv('MICROSOFT_CLARITY_ID', '')

  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page without Clarity', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).not.toContain('function(c,l,a,r,i,t,y)')
  })
})
