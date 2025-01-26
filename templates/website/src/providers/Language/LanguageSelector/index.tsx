'use client'

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select'
import { nextIntlConfig } from '@/i18n/routing'
import { Locale } from '@/i18n/types'
import { useState } from 'react'

import { useLocale } from '..'
import React from 'react'
import { localeLocalStorageKey } from './types'
import { useLanguageSwitch } from '@/hooks/useLanguageSwitch'
import clsx from 'clsx'

export const LanguageSelector: React.FC = ({ className }: { className?: string }) => {
  // HACK: This is ugly, implement clean solution
  const { locale, changeLanguage, isLoading } = useLanguageSwitch()

  // INFO: Use the enabled locales (clean way, alternatively use routing.locales)
  const locales: Locale[] = nextIntlConfig.locales
  // TODO: Fix the issues with this solution
  // const defaultLocale: Locale = nextIntlConfig.defaultLocale as Locale
  //
  // const { setLocale } = useLocale()
  // const [value, setValue] = useState('')
  //
  // const onLocaleChange = (localeToSet: Locale) => {
  //   if (localeToSet === defaultLocale) {
  //     setLocale(null)
  //     setValue(defaultLocale)
  //   } else {
  //     setLocale(localeToSet)
  //     setValue(localeToSet)
  //   }
  // }
  //
  // React.useEffect(() => {
  //   const preference = window.localStorage.getItem(localeLocalStorageKey)
  //   setValue(preference ?? defaultLocale)
  // }, [defaultLocale])

  return (
    <div
      className={clsx(
        'grid grid-cols-1',
        'relative text-gray-400',
        isLoading && 'transition-opacity [&:disabled]:opacity-30',
        className,
      )}
    >
      {/* HACK: This works but it's ugly */}
      {/* TODO: The clean way of doing things */}
      {/* <Select onValueChange={onLocaleChange} value={value}> */}
      {/*   <SelectTrigger */}
      {/*     aria-label="Select a theme" */}
      {/*     className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none" */}
      {/*   > */}
      {/*     <SelectValue placeholder="Theme" /> */}
      {/*   </SelectTrigger> */}
      {/*   <SelectContent> */}
      {/*     {locales.map((cur) => ( */}
      {/*       <SelectItem value={cur} key={cur}> */}
      {/*         {cur.toUpperCase()} */}
      {/*       </SelectItem> */}
      {/*     ))} */}
      {/*   </SelectContent> */}
      {/* </Select> */}

      <select
        id="language-select"
        name="language"
        defaultValue={locale}
        disabled={isLoading}
        onChange={(e) => changeLanguage(e.target.value)}
        value={locale}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-1.5 pl-3 pr-8 text-base font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-600 sm:text-sm/6"
      >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
        </div>
      )}
    </div>
  )
}
