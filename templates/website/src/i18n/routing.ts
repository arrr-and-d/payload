import { defineRouting } from 'next-intl/routing'
import { localization } from '.'
import { Locale as payloadLocale } from 'payload'
import { Locale } from './types'

function convertPayloadLocalesToStringLocales(locales: payloadLocale[]): Locale[] {
  return locales.map((locale: payloadLocale) => locale.code) as Locale[]
}

export const nextIntlConfig = {
  defaultLocale: localization.defaultLocale as Locale,
  locales: convertPayloadLocalesToStringLocales(
    localization.locales as payloadLocale[],
  ) as Locale[],
}

export const routing = defineRouting(nextIntlConfig)
