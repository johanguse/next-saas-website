import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

const featuresData = [
  {
    title: 'Authentication',
    description:
      'Save hours of your time fighting Authentication. It comes with Magic link login, Social login, Register flow, Login flow, Forgot password, Change password flow. Choose whatever works for you.',
    icon: 'lock-access',
  },
  {
    title: 'Billing & Subscriptions',
    description:
      'Handle User payments using Stripe, Billing Portal and Pricing Table. Stripe webhooks are also taken care to update your database.',
    icon: 'user',
  },
  {
    title: 'Social Logins',
    description:
      'Support for different Social login provider, i.e - Google, GitHub. Add any social provider with less than 10 lines of code.',
    icon: 'social',
  },
  {
    title: 'Transactional Emails',
    description:
      'Send transaction emails using Resend. Customise your template directly using React.Email. Ready to use.',
    icon: 'brand-gmail',
  },
  {
    title: 'UI components',
    description:
      'Landing page components, Auth Components, Everything is setup in place.',
    icon: 'user',
  },
  {
    title: 'Mobile friendly',
    description:
      "Get out-of-the-box mobile UI optimization. Perfect to build mobile-first UI's using Mantine UI",
    icon: 'cookie',
  },
  {
    title: 'Blog',
    description:
      'Next SaaS Template comes with blog setup done. Just bring in your content written in markdown and you are set.',
    icon: 'notes',
  },
  {
    title: 'Multi blocks',
    description:
      'Build fast with multi block components. All components are ready to use. Just add the block and you are ready to go.',
    icon: 'world',
  },
]

const icons = {
  'lock-access': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
      <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
      <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
      <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
      <path d="M10 11v-2a2 2 0 1 1 4 0v2"></path>
    </svg>
  ),
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </svg>
  ),
  social: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M12 7l0 4"></path>
      <path d="M6.7 17.8l2.8 -2"></path>
      <path d="M17.3 17.8l-2.8 -2"></path>
    </svg>
  ),
  'brand-gmail': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"></path>
      <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"></path>
      <path d="M16 4l-4 4l-4 -4"></path>
      <path d="M4 6.5l8 7.5l8 -7.5"></path>
    </svg>
  ),
  cookie: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M8 13v.01"></path>
      <path d="M12 17v.01"></path>
      <path d="M12 12v.01"></path>
      <path d="M16 14v.01"></path>
      <path d="M11 8v.01"></path>
      <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.66c.456 -.186 1.074 -.527 1.852 -1.024a3 3 0 0 1 2.296 0z"></path>
    </svg>
  ),
  notes: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M5 21h14"></path>
      <path d="M3 7h18"></path>
      <path d="M6 3h1"></path>
      <path d="M9 3h1"></path>
      <path d="M12 3h7"></path>
      <path d="M12 15l0 3"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    </svg>
  ),
  world: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#228be6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h16.8"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
      <path d="M5.5 3h13"></path>
      <path d="M5.5 21h13"></path>
    </svg>
  ),
}

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
      {icons[icon]}
      <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

export default function TempFeatures({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h2">Features</BlockTitle.Header>

            <BlockTitle.Title elementType="h3">
              Discover Our Unique Features and titles
            </BlockTitle.Title>

            <BlockTitle.Description>
              Our features are designed to enhance your productivity and
              streamline your workflow.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="mx-auto w-full max-w-full space-y-4">
            <div className="mt-[calc(3.125rem_*_var(--mantine-scale))] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
