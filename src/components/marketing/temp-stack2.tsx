import { cn } from '@/lib/utils'

import { BlockTitle } from '../layout/main-title'

export default function TempStack2({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h2">Stack</BlockTitle.Header>

          <BlockTitle.Title elementType="h3">Meet our stack</BlockTitle.Title>

          <BlockTitle.Description>
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </BlockTitle.Description>

          <BlockTitle.Background />

          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">NextJS</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              The React Framework for the Web.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">Next Auth</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Authentication for Next.js.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">Stripe</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Accept Payments, Manage your subscription, refunds, invoices with
              Stripe.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">TypeScript</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A Robust, Type-Safe Superset of JavaScript.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">Prisma</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Next-generation Node & TypeScript ORM. Prisma unlocks a new level
              of developer experience when working with databases thanks to its
              intuitive data model, automated migrations, type-safety &
              auto-completion.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">Zod</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              TypeScript-first schema validation with static type inference.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">Resend</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Email for developers. The best API to reach humans instead of spam
              folders. Build, test, and deliver transactional emails at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
