import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

export default function TempFeatures2({ className }: { className?: string }) {
  return (
    <section className={cn(className) + ' w-full'}>
      <div className="container px-4 md:px-6">
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📦 Ready-made blocks</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Beutifully designed and ready to use blocks, copy and paste into
              your app.
              <br /> <br />
              See in action{' '}
              <a
                href="https://nextsaas.app/blocks"
                target="_blank"
                className="underline underline-offset-2"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🔐 Authentication</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Full authentication flow including email/password, magic link and
              social login. All components are ready to use and fully
              customizable.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">💸 Payments</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Billing your customers with subscriptions is easy. We use Stripe
              integrations.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🏢 Multi-tenancy</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Built for multi-tenancy and with a ready-to-use team and user
              management, which you can also easily deactivate if you don&apos;t
              need it.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">👨🏼‍💻 Super Admin</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              An admin panel is included, which allows you to manage all users
              and teams.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🤖 AI</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Includes a ready-to-use AI integration based on Vercel&apos;s AI
              SDK. (work in progress)
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🖥️ SaaS Landing Page</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A beautiful landing page with features, pricing and newsletter
              signup is included.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📰 SaaS Blog</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              MDX-based blog is included to keep your customers up to date with
              the latest news.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📚 SaaS Documentation</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              MDX-based documentation is included to help your customers to get
              started with your app.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📜 SaaS Legal Pages</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Placeholder pages for privacy policy and terms of service are
              included.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📊 Analytics</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Analytics with your favorite provider are included to track your
              users and their behavior.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📧 Newsletter signup</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A newsletter signup component is included to collect emails from
              potential customers.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🎨 Customizable UI</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your SaaS app is fully customizable and you can easily change the
              styling to match your brand.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🌙 Dark mode</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A dark mode is included and all components are ready to use in
              dark mode.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">💅🏼 shadcn/ui compatible</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Built on top of Tailwind CSS and Radix UI, Our template is fully
              compatible with shadcn/ui for super fast UI development.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🗃️ Storage providers</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Integrations for and S3-compatible services are included for file
              uploads. (work in progress)
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📱 Mobile-friendly</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              The UI is fully responsive and mobile-friendly.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">🔒 Fully type-safe</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              From the API to the frontend, everything is type-safe and gives
              you a great developer experience.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📧 Custom emails</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              We use react-email to allow you to build your email templates with
              React and customize them to your needs.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">☁️ Fully serverless stack</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Built with serverless functions, you don&apos;t have to worry
              about managing or scaling your backend.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">💽 Choose your DB</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Thanks to the power of Prisma, you can use Postgres, MySQL and
              more.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">📚 Extensive documentation</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              We provide you with extensive documentation to help you build your
              SaaS quickly.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <h4 className="text-base font-bold">💬 Discord community</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              After purchase you get access to our exclusive Discord for support
              and feedback. (soon)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
