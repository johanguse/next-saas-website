'use client'

import { Suspense } from 'react'

import { cn } from '@/lib/utils'

import { MdxCard } from '@/components/content/mdx-card'
import { Callout } from '@/components/shared/callout'

import defaultComponents from 'fumadocs-ui/mdx'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  ...defaultComponents,
  Callout,
  Card: MdxCard,
  Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="mb-12 ml-4 border-l pl-8 steps [counter-reset:step] [&>h3]:step"
      {...props}
    />
  ),
  Suspense,
}

export function Content({ code }: { code: string }) {
  const MDX = useMDXComponent(code)

  return <MDX components={components} />
}
