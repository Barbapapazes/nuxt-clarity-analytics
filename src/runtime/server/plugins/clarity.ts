export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    const microsoftClarityID = process.env.MICROSOFT_CLARITY_ID
    if (!microsoftClarityID) { return }

    const script = `
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${microsoftClarityID}");`
    return html.head.push(`<script>${script}</script>`)
  })
})
