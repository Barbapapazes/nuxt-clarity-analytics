import { useRuntimeConfig, defineNitroPlugin } from '#imports'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    const runtimeConfig = useRuntimeConfig()

    // TODO: `process.env.MICROSOFT_CLARITY_ID` is an artifact of version 0.0.6 and below that should be removed in the future major version.
    const microsoftClarityID = runtimeConfig.clarityId || process.env.MICROSOFT_CLARITY_ID

    if (!microsoftClarityID) {
      return
    }

    const script = `
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${microsoftClarityID}");`

    html.head.push(`<script>${script}</script>`)
  })
})
