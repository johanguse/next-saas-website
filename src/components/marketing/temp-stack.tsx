import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

const featuresData = [
  {
    title: 'NextJS',
    description: 'The React Framework for the Web',
    iconKey: 'NextIcon',
  },
  {
    title: 'Next Auth',
    description: 'Authentication for Next.js',
    iconKey: 'AutheliaIcon',
  },
  {
    title: 'Stripe',
    description:
      'Accept Payments, Manage your subscription, refunds, invoices with Stripe.',
    iconKey: 'StripeIcon',
  },
  {
    title: 'TypeScript',
    description: 'A Robust, Type-Safe Superset of JavaScript',
    iconKey: 'TypeScriptIcon',
  },
  {
    title: 'Prisma',
    description:
      'Next-generation Node & TypeScript ORM. Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.',
    iconKey: 'PrismaIcon',
  },
  {
    title: 'Zod',
    description:
      'TypeScript-first schema validation with static type inference',
    iconKey: 'ZodIcon',
  },
  {
    title: 'Resend',
    description:
      'Email for developers. The best API to reach humans instead of spam folders. Build, test, and deliver transactional emails at scale.',
    iconKey: 'ResendIcon',
  },
]

const icons = {
  NextIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M16 8l-4 4-4-4" />
    </svg>
  ),
  AutheliaIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
  StripeIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#635BFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M2 12h20M2 6h20M2 18h20" />
    </svg>
  ),
  TypeScriptIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3178C6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      <path d="M10 10h4v4h-4z" />
    </svg>
  ),
  PrismaIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2D3748"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M12 2l7 12-7 8-7-8z" />
      <path d="M12 2v18" />
    </svg>
  ),
  ZodIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8l-8 8" />
    </svg>
  ),
  ResendIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 8l8 8" />
    </svg>
  ),
}

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
      {icon}
      <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

const featuresWithIcons = featuresData.map((feature) => ({
  ...feature,
  icon: icons[feature.iconKey],
}))

export default function TempStack({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
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
          <div className="mx-auto w-full max-w-full space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuresWithIcons.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
