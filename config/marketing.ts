import { MarketingConfig } from 'types'

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Pricing',
      href: '/#pricing',
    },
    {
      title: 'Blocks',
      href: 'https://nextsaas.app/blocks',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  footer: {
    links: [
      {
        href: 'https://bit.ly/48LTNin',
        name: 'Public Roadmap',
        target: '_blank',
      },
      {
        href: '/legal/privacy-policy',
        name: 'Privacy Policy',
      },
      {
        href: '/legal/cookies-policy',
        name: 'Cookies Policy',
      },
      {
        href: '/legal/terms-of-service',
        name: 'Terms of Service',
      },
    ],
  },
  postsPerPage: 6,
}
