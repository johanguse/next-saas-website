import { cn } from '@/lib/utils'

import { BlockTitle } from '@/components/layout/main-title'

export default function Features({ className }: { className?: string }) {
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
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                  <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                  <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                  <path d="M10 11v-2a2 2 0 1 1 4 0v2"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">Authentication</p>
                <p className="mt-2 text-sm text-gray-600">
                  Save hours of your time fighting Authentication. It comes with
                  Magic link login, Social login, Register flow, Login flow,
                  Forgot password, Change password flow. Choose whatever works
                  for you.
                </p>
              </div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">
                  Billing &amp; Subscriptions
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Handle User payments using Stripe, Billing Portal and Pricing
                  Table. Stripe webhooks are also taken care to update your
                  database.
                </p>
              </div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M12 7l0 4"></path>
                  <path d="M6.7 17.8l2.8 -2"></path>
                  <path d="M17.3 17.8l-2.8 -2"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">Social Logins</p>
                <p className="mt-2 text-sm text-gray-600">
                  Support for different Social login provider, i.e - Google,
                  GitHub. Add any social provider with less than 10 lines of
                  code.
                </p>
              </div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"></path>
                  <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"></path>
                  <path d="M16 4l-4 4l-4 -4"></path>
                  <path d="M4 6.5l8 7.5l8 -7.5"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">
                  Transactional Emails
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Send transaction emails using Resend. Customise your template
                  directly using React.Email. Ready to use.
                </p>
              </div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">UI components</p>
                <p className="mt-2 text-sm text-gray-600">
                  Landing page components, Auth Components, Everything is setup
                  in place.
                </p>
              </div>
              <div className="rounded-md bg-white p-6 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#228be6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-[calc(3.125rem_*_var(--mantine-scale))]"
                >
                  <path d="M8 13v.01"></path>
                  <path d="M12 17v.01"></path>
                  <path d="M12 12v.01"></path>
                  <path d="M16 14v.01"></path>
                  <path d="M11 8v.01"></path>
                  <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.215a3 3 0 0 1 -1.416 1.814c-.891 .497 -1.675 .727 -2.352 .69a5 5 0 0 1 -4.252 -2.4h-2.014a5 5 0 0 1 -4.252 2.4c-.677 .037 -1.461 -.193 -2.352 -.69a3 3 0 0 1 -1.416 -1.814c-.251 -1.021 -.471 -1.759 -.66 -2.215c-.186 -.448 -.527 -1.066 -1.024 -1.852a3 3 0 0 1 0 -2.296l.053 -.132a4 4 0 0 0 4.656 -6.14l2.667 -1.104a4 4 0 0 1 3.704 0z"></path>
                </svg>
                <p className="mt-4 text-lg font-semibold">Production Ready</p>
                <p className="mt-2 text-sm text-gray-600">
                  Easy way to deploy your application. Just one command to build
                  and deploy your application.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col">
                <img
                  alt="Google OAuth 2.0"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn.svgporn.com/logos/google-icon.svg"
                />{' '}
                <span className="mt-3 font-bold">Google OAuth 2.0</span>{' '}
                <span className="text-gray-600">
                  Securely authenticate users through Google for your next
                  project.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Twitter OAuth 2.0"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn.svgporn.com/logos/twitter.svg"
                />{' '}
                <span className="mt-3 font-bold">Twitter OAuth 2.0</span>{' '}
                <span className="text-gray-600">
                  Securely authenticate users through Twitter for your next
                  project.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Email and Password"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn.svgporn.com/logos/google-gmail.svg"
                />{' '}
                <span className="mt-3 font-bold">Email and Password</span>{' '}
                <span className="text-gray-600">
                  A lovely DX of email/password authentication built on top of
                  standard Web APIs.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Admin Functionality"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn-icons-png.flaticon.com/512/1769/1769328.png"
                />{' '}
                <span className="mt-3 font-bold">Admin Functionality</span>{' '}
                <span className="text-gray-600">
                  Header based admin access required on top of login.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Email Verification Flow"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png"
                />{' '}
                <span className="mt-3 font-bold">Email Verification Flow</span>{' '}
                <span className="text-gray-600">
                  Automated emails to verify credentials login improving
                  security of the application.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Forgot Password Flow"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn-icons-png.flaticon.com/512/1000/1000999.png"
                />{' '}
                <span className="mt-3 font-bold">Forgot Password Flow</span>{' '}
                <span className="text-gray-600">
                  Allow users to easily reset their password with an email.
                </span>{' '}
              </div>
              <div className="flex flex-col">
                <img
                  alt="Protected Routes"
                  className="size-[30px] bg-white"
                  loading="lazy"
                  width="30"
                  height="30"
                  src="https://cdn-icons-png.flaticon.com/512/3064/3064373.png"
                />{' '}
                <span className="mt-3 font-bold">Protected Routes</span>{' '}
                <span className="text-gray-600">
                  Protecting routes with getSession helper.
                </span>{' '}
              </div>{' '}
            </div>
            <div className="grid-row grid animate-fade-up gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <InboxIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Smart Inbox</h2>
                <p>
                  Our Smart Inbox feature helps you manage your emails
                  efficiently by prioritizing important emails.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <MergeIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Seamless Integration</h2>
                <p>
                  Seamless Integration allows you to connect with your favorite
                  apps and services without leaving your inbox.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <SettingsIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Advanced Customization</h2>
                <p>
                  With Advanced Customization, you can personalize your email
                  client to suit your preferences and work style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <SearchIcon className="mb-2 size-6" />
                </div>
                <h2 className="text-xl font-bold">Powerful Search</h2>
                <p>
                  Our Powerful Search feature allows you to find any email,
                  contact, or file in seconds.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <LockIcon className="mb-2 size-6 opacity-75" />
                </div>
                <h2 className="text-xl font-bold">Reliable Security</h2>
                <p>
                  With Reliable Security, your data is always safe and
                  protected.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <div className="rounded-full p-2">
                  <MergeIcon className="mb-2 size-6 opacity-75" />
                </div>
                <h2 className="text-xl font-bold">Easy Collaboration</h2>
                <p>
                  Easy Collaboration allows you to share and edit documents with
                  your team in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
