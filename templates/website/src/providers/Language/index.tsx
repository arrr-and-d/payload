'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import type { LocaleContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultLocale, getImplicitPreference, localeLocalStorageKey } from './shared'
import { localeIsValid } from './types'
import { Locale } from '@/i18n/types'

const initialContext: LocaleContextType = {
  setLocale: () => null,
  locale: undefined,
}

const LocaleContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale | undefined>(
    canUseDOM ? (document.documentElement.getAttribute('data-locale') as Locale) : undefined,
  )

  const setLocale = useCallback((localeToSet: Locale | null) => {
    if (localeToSet === null) {
      window.localStorage.removeItem(localeLocalStorageKey)
      const implicitPreference = getImplicitPreference()
      document.documentElement.setAttribute('data-locale', implicitPreference || '')
      if (implicitPreference) setLocaleState(implicitPreference)
    } else {
      setLocaleState(localeToSet)
      window.localStorage.setItem(localeLocalStorageKey, localeToSet)
      document.documentElement.setAttribute('data-locale', localeToSet)
    }
  }, [])

  useEffect(() => {
    let localeToSet: Locale = defaultLocale
    const preference = window.localStorage.getItem(localeLocalStorageKey)

    if (localeIsValid(preference)) {
      localeToSet = preference
    } else {
      const implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        localeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute('data-locale', localeToSet)
    setLocaleState(localeToSet)
  }, [])

  return <LocaleContext.Provider value={{ setLocale, locale }}>{children}</LocaleContext.Provider>
}

export const useLocale = (): LocaleContextType => useContext(LocaleContext)
