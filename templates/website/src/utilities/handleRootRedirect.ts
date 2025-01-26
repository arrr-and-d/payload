import configPromise from '@payload-config'
import type { Page } from '@/payload-types'
import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { getPayload as getPayloadService } from 'payload'
import type { TypedLocale } from 'payload'
import { cache } from 'react'

export const getPayload = async () => getPayloadService({ config: configPromise })

type QueryPageBySlugParams = {
  locale: TypedLocale
  slug: Page['slug']
}

export const queryRedirects = cache(async ({ locale }: { locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload()

  const redirects = await payload.find({
    overrideAccess: draft,
    collection: 'redirects',
    pagination: false,
    locale,
    draft,
  })

  return redirects?.docs || []
})

export const handleRootRedirect = async (locale: TypedLocale): Promise<never> => {
  const redirects = await queryRedirects({ locale })
  const rootRedirect = redirects?.find(({ from }) => from === '/')
  const targetPage = rootRedirect?.to?.reference?.value as Page | undefined

  if (!targetPage?.slug) {
    notFound()
  }

  redirect(`/${locale}/${targetPage.slug}`)
}
