'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ProductType } from '@/lib/fake-data/hero-parallax'
import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { BlockTitle } from '@/components/layout/main-title'
import SparklesText from '@/components/magicui/sparkles-text'

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useTheme } from 'next-themes'

export const HeroParallax = ({
  className,
  products,
}: {
  className?: string
  products: ProductType[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className={
        className +
        ' relative flex h-[230vh]  flex-col self-auto overflow-hidden pt-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
      }
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex  flex-row space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative left-0 top-0 z-50 mx-auto w-full max-w-7xl  px-4 py-10 md:py-20">
      <BlockTitle.Wrapper>
        <BlockTitle.Header elementType="h1">Pre Sale</BlockTitle.Header>

        <BlockTitle.Title elementType="div">
          <h2
            className="my-6 animate-fade-up text-balance font-urban text-5xl font-extrabold tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Launching Your SaaS <SparklesText text="Success Story" />
          </h2>
        </BlockTitle.Title>

        <BlockTitle.Description>
          Explore our comprehensive FAQ to find quick answers to common
          inquiries. If you need further assistance, don&apos;t hesitate to
          contact us for personalized help.
        </BlockTitle.Description>

        <BlockTitle.Background />

        <BlockTitle.Separator className="mb-20" />

        <div className="z-50 mx-auto flex flex-row items-center justify-center gap-6 text-center">
          <Link href="#pricing" className={cn(buttonVariants({ size: 'lg' }))}>
            Buy now
          </Link>

          <Link
            href="https://nextsaas.app/"
            target="_blank"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            See the demo
          </Link>
        </div>
      </BlockTitle.Wrapper>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: ProductType
  translate: MotionValue<number>
}) => {
  const [mounted, setMounted] = useState(false)

  const { theme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = currentTheme === 'dark'

  let imageUrl = product.thumbnail
  if (isDark) {
    imageUrl = product.thumbnailDark
  }
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={imageUrl}
          height="600"
          width="600"
          className="absolute inset-0 size-full object-cover object-left-top"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-6 left-6 text-xl text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  )
}
