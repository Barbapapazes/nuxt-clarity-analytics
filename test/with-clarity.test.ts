import { fileURLToPath } from 'node:url'
import { describe, it, expect, vi } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr with Clarity', async () => {
  vi.stubEnv('MICROSOFT_CLARITY_ID', '1234567890')

  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page with Clarity', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('function(c,l,a,r,i,t,y)')
    expect(html).toContain('1234567890')
  })
})
