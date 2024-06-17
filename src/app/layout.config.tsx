import { siteConfig } from '@/config/site'

import { type BaseLayoutProps } from 'fumadocs-ui/layout'

// basic configuration here
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: siteConfig.name,
  },
  links: [
    {
      text: 'Demo app',
      url: 'https://nextsaas.app',
      external: true,
    },
    {
      text: 'Buy Now',
      url: 'https://nextsaastemplate.com',
      external: true,
    },
  ],
}
