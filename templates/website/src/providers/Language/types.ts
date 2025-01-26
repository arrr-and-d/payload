import { nextIntlConfig } from '@/i18n/routing'
import { Locale } from '@/i18n/types'

export interface LocaleContextType {
  setLocale: (locale: Locale | null) => void
  locale?: Locale | null
}

export function localeIsValid(string: null | string): string is Locale {
  return string ? [...nextIntlConfig.locales].includes(string) : false
}
