# Nuxt Clarity Analytics

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

A module to easily integrate Clarity Analytics into your Nuxt 3 project.

- [✨ &nbsp;Release Notes](https://github.com/Barbapapazes/nuxt-clarity-analytics/releases)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ✅ &nbsp;Works with Nuxt 3 using Nitro (SSR and SSG)

## Quick Setup

1. Add `nuxt-clarity-analytics` dependency to your project

```bash
npx nuxi@latest module add clarity-analytics
```

2. Add `nuxt-clarity-analytics` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-clarity-analytics'
  ]
})
```

Then, you must register your clarity ID project `MICROSOFT_CLARITY_ID` in your environment variables.

And _Voilà_!

You can easily check that the script is correctly injected by inspecting your page on your browser. Note that nothing is injected if the key is missing!

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-clarity-analytics/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-clarity-analytics

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-clarity-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-clarity-analytics

[license-src]: https://img.shields.io/npm/l/nuxt-clarity-analytics.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-clarity-analytics
