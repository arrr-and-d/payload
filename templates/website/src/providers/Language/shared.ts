import { nextIntlConfig } from '@/i18n/routing'
import { Locale } from '@/i18n/types'

export const localeLocalStorageKey = 'payload-locale'

export const defaultLocale = nextIntlConfig.defaultLocale

export const getImplicitPreference = (): Locale | null => {
  // INFO: Normalize to two letter code
  const browserLanguage = navigator.language.split('-')[0]

  const isSupportedLocale = nextIntlConfig.locales.includes(browserLanguage as Locale)

  if (isSupportedLocale) {
    return browserLanguage as Locale
  }

  return null
}
