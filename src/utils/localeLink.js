import { globalHistory } from '@reach/router'

const keys = [
  { key: 'de', name: 'DE', path: '/de/' },
  { key: 'en', name: 'EN', path: '/en/' }
]

export const isIndex = location => {
  const { pathname } = location
  const lang = keys.find(k => pathname === `/${k.key}` || pathname === k.path)
  return !!lang
}

export const localeLink = to => {
  const { pathname } = globalHistory.location

  const lang = keys.find(
    k => pathname.includes(`/${k.key}/`) || pathname.includes(`/${k.key}`)
  )

  if (!lang) {
    return to
  }
  return `/${lang.key}${to}`
}

export const languageLink = () => {
    const { pathname } = globalHistory.location
    console.log("We are at : " + pathname)
    if (pathname.match(`^/en`))
    {
        return pathname.replace("/en", "/de")
    }
    else
    {
        return pathname.replace("/de", "/en")
    }
}

export const languageString = () => {
    const { pathname } = globalHistory.location

    if (pathname.match(`^/en`))
        return "DE"
    else
        return "EN"
}

export const currentLanguage = () => {
    const { pathname } = globalHistory.location

    if (pathname.match(`^/en`))
        return "en"
    else
        return "de"
}
