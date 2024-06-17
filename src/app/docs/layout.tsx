import { type ReactNode, Suspense } from 'react'

import { baseOptions } from '../layout.config'
import { pageTree } from '../source'
import { DocsLayout } from 'fumadocs-ui/layout'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      sidebar={{
        footer: (
          <Suspense>
            <SidebarFooter />
          </Suspense>
        ),
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  )
}

async function SidebarFooter() {
  const version = process.env.npm_package_version
  return (
    <footer className="flex w-full items-baseline justify-center gap-2 text-zinc-600 dark:text-zinc-400">
      <a
        href={`https://nextsaastemplate.com`}
        className="hover:underline"
        tabIndex={-1}
      >
        <pre className="text-xs">{version}</pre>
      </a>
    </footer>
  )
}
