import { productData } from '@/lib/fake-data/hero-parallax'

import { HeroParallax } from '@/components/hero/hero-parallax'
import Hero from '@/components/hero/hero-regular'
import { BlockTitle } from '@/components/layout/main-title'
import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Powered from '@/components/marketing/powered'
import TempFeatures from '@/components/marketing/temp-features'
import TempStack from '@/components/marketing/temp-stack'
import OneCardPricingTable from '@/components/pricing/pricing-one-card'

export default async function IndexPage() {
  return (
    <>
      <Hero className="flex lg:hidden" />
      <HeroParallax className="hidden lg:flex" products={productData} />
      <section
        className="animate-fade-up bg-gray-50 py-8 text-zinc-500 opacity-0 dark:bg-black dark:text-zinc-700 dark:opacity-50"
        style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
      >
        <Powered />
      </section>
      <TempFeatures className="my-24" />
      <TempStack className="mb-24" />
      <section id="pricing" className="py-24">
        <OneCardPricingTable />
        <div
          className="container mx-auto mt-4 max-w-7xl lg:px-8"
          id="pricing-paritydeals"
        ></div>
      </section>
      <section className="mx-auto flex w-full flex-col px-6 py-10 md:w-10/12 md:py-40 lg:max-w-4xl">
        <div className="container mx-auto text-center">
          <BlockTitle.Wrapper className="mb-10">
            <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Freequently Asked Questions
            </BlockTitle.Title>
            <BlockTitle.Description>
              Explore our comprehensive FAQ to find quick answers to common
              inquiries. If you need further assistance, don&apos;t hesitate to
              contact us for personalized help.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FAQ />
        </div>
      </section>
      <CtaSubscribe />
    </>
  )
}
