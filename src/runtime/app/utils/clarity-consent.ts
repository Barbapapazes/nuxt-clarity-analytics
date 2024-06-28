export const clarityConsent = (consent = true) => {
  if (!import.meta.client) {
    return
  }

  // @ts-expect-error clarity is a global variable injected by the Clarity script
  const clarity = window.clarity

  if (!clarity) {
    return
  }

  clarity('consent', consent)
}
