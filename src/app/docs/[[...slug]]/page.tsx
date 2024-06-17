import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { getPage, getPages } from '@/app/source'

import { Content } from './content'
import { DocsBody, DocsPage } from 'fumadocs-ui/page'

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const lastModifiedTime = siteConfig.lastUpdate

  return (
    <DocsPage lastUpdate={new Date(lastModifiedTime)} toc={page.data.toc}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <Content code={page.data.body.code} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
