import { productData } from '@/lib/fake-data/hero-parallax'

import { HeroParallax } from '@/components/hero/hero-parallax'
import Hero from '@/components/hero/hero-regular'
import { BlockTitle } from '@/components/layout/main-title'
import BentoGrid from '@/components/marketing/bento-grid'
import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Powered from '@/components/marketing/powered'
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
      <Features className="my-24" />
      <BentoGrid className="mb-24" />
      <section id="pricing" className="py-24">
        <BlockTitle.Wrapper className="mb-24">
          <BlockTitle.Header elementType="h1">Pricing</BlockTitle.Header>
          <BlockTitle.Title elementType="h2">
            Buy once and build unlimited projects
          </BlockTitle.Title>
          <BlockTitle.Description>
            Buy on pre-sale and save up to 35%
          </BlockTitle.Description>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <OneCardPricingTable />
        <div className="container mt-2" id="pricing-paritydeals"></div>
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
