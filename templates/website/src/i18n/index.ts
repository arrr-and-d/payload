//
// localization: {
//     // locales: ['en', 'de'], // required
//     locales: [
//       {
//         label: {
//           en: 'English',
//           fr: 'Anglais',
//           de: 'Englisch',
//           es: 'Inglés',
//           it: 'Inglese',
//           ru: 'Английский',
//         },
//         code: 'en',
//         fallbackLocale: 'en',
//       },
//       {
//         label: {
//           en: 'French',
//           fr: 'Français',
//           de: 'Französisch',
//           es: 'Francés',
//           it: 'Francese',
//           ru: 'Французский',
//         },
//         code: 'fr',
//         fallbackLocale: 'en',
//       },
//       {
//         label: {
//           en: 'Spanish',
//           fr: 'Espagnol',
//           de: 'Spanisch',
//           es: 'Español',
//           it: 'Spagnolo',
//           ru: 'Испанский',
//         },
//         code: 'es',
//         fallbackLocale: 'en',
//       },
//       {
//         label: {
//           en: 'Italian',
//           fr: 'Italien',
//           de: 'Italienisch',
//           es: 'Italiano',
//           it: 'Italiano',
//           ru: 'Итальянский',
//         },
//         code: 'it',
//         fallbackLocale: 'en',
//       },
//       {
//         label: {
//           en: 'German',
//           fr: 'Allemand',
//           de: 'Deutsch',
//           es: 'Alemán',
//           it: 'Tedesco',
//           ru: 'Немецкий',
//         },
//         code: 'de',
//         fallbackLocale: 'en',
//       },
//       {
//         label: {
//           en: 'Russian',
//           fr: 'Russe',
//           de: 'Russisch',
//           es: 'Ruso',
//           it: 'Russo',
//           ru: 'Русский',
//         },
//         code: 'ru',
//         fallbackLocale: 'en',
//       },
//     ],
//     defaultLocale: 'en', // required
//     fallback: true, // defaults to true
//   }, // required
//
//   i18n: {
//     fallbackLanguage: 'en', // default
//     supportedLanguages: { en, fr, es, it, ru },
//     translations: {
//       en: {
//         en: 'English',
//         fr: 'Anglais',
//         de: 'Englisch',
//         es: 'Inglés',
//         it: 'Inglese',
//         ru: 'Английский',
//       },
//       fr: {
//         en: 'French',
//         fr: 'Français',
//         de: 'Französisch',
//         es: 'Francés',
//         it: 'Francese',
//         ru: 'Французский',
//       },
//       es: {
//         en: 'Spanish',
//         fr: 'Espagnol',
//         de: 'Spanisch',
//         es: 'Español',
//         it: 'Spagnolo',
//         ru: 'Испанский',
//       },
//       it: {
//         en: 'Italian',
//         fr: 'Italien',
//         de: 'Italienisch',
//         es: 'Italiano',
//         it: 'Italiano',
//         ru: 'Итальянский',
//       },
//       de: {
//         en: 'German',
//         fr: 'Allemand',
//         de: 'Deutsch',
//         es: 'Alemán',
//         it: 'Tedesco',
//         ru: 'Немецкий',
//       },
//       ru: {
//         en: 'Russian',
//         fr: 'Russe',
//         de: 'Russisch',
//         es: 'Ruso',
//         it: 'Russo',
//         ru: 'Русский',
//       },
//     },
//   },

import { I18nOptions } from '@payloadcms/translations'
import { en } from '@payloadcms/translations/languages/en'
import { es } from '@payloadcms/translations/languages/es'
import { fr } from '@payloadcms/translations/languages/fr'
import { it } from '@payloadcms/translations/languages/it'
import { ru } from '@payloadcms/translations/languages/ru'
import { LocalizationConfig } from 'payload'
import { Locale as payloadLocale } from 'payload'

const enabledLocales: payloadLocale[] = [
  {
    label: {
      en: 'English',
      fr: 'Anglais',
      de: 'Englisch',
      es: 'Inglés',
      it: 'Inglese',
      ru: 'Английский',
    },
    code: 'en',
    fallbackLocale: 'en',
  },
  {
    label: {
      en: 'French',
      fr: 'Français',
      de: 'Französisch',
      es: 'Francés',
      it: 'Francese',
      ru: 'Французский',
    },
    code: 'fr',
    fallbackLocale: 'en',
  },
  {
    label: {
      en: 'Spanish',
      fr: 'Espagnol',
      de: 'Spanisch',
      es: 'Español',
      it: 'Spagnolo',
      ru: 'Испанский',
    },
    code: 'es',
    fallbackLocale: 'en',
  },
  {
    label: {
      en: 'Italian',
      fr: 'Italien',
      de: 'Italienisch',
      es: 'Italiano',
      it: 'Italiano',
      ru: 'Итальянский',
    },
    code: 'it',
    fallbackLocale: 'en',
  },
  {
    label: {
      en: 'German',
      fr: 'Allemand',
      de: 'Deutsch',
      es: 'Alemán',
      it: 'Tedesco',
      ru: 'Немецкий',
    },
    code: 'de',
    fallbackLocale: 'en',
  },
  {
    label: {
      en: 'Russian',
      fr: 'Russe',
      de: 'Russisch',
      es: 'Ruso',
      it: 'Russo',
      ru: 'Русский',
    },
    code: 'ru',
    fallbackLocale: 'en',
  },
]

export const localization: LocalizationConfig = {
  // locales: ['en', 'de'], // required
  locales: enabledLocales,
  defaultLocale: 'en', // required
  fallback: true, // defaults to true
} // required

export const i18nOptions: I18nOptions = {
  fallbackLanguage: 'en', // default
  supportedLanguages: { en, fr, es, it, ru },
  // translations: {
  //   en: {
  //     en: 'English',
  //     fr: 'Anglais',
  //     de: 'Englisch',
  //     es: 'Inglés',
  //     it: 'Inglese',
  //     ru: 'Английский',
  //   },
  //   fr: {
  //     en: 'French',
  //     fr: 'Français',
  //     de: 'Französisch',
  //     es: 'Francés',
  //     it: 'Francese',
  //     ru: 'Французский',
  //   },
  //   es: {
  //     en: 'Spanish',
  //     fr: 'Espagnol',
  //     de: 'Spanisch',
  //     es: 'Español',
  //     it: 'Spagnolo',
  //     ru: 'Испанский',
  //   },
  //   it: {
  //     en: 'Italian',
  //     fr: 'Italien',
  //     de: 'Italienisch',
  //     es: 'Italiano',
  //     it: 'Italiano',
  //     ru: 'Итальянский',
  //   },
  //   de: {
  //     en: 'German',
  //     fr: 'Allemand',
  //     de: 'Deutsch',
  //     es: 'Alemán',
  //     it: 'Tedesco',
  //     ru: 'Немецкий',
  //   },
  //   ru: {
  //     en: 'Russian',
  //     fr: 'Russe',
  //     de: 'Russisch',
  //     es: 'Ruso',
  //     it: 'Russo',
  //     ru: 'Русский',
  //   },
  // },
}
