'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ProductType } from '@/lib/fake-data/hero-parallax'
import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { BlockTitle } from '@/components/layout/main-title'
import SparklesText from '@/components/magicui/sparkles-text'
import FollowTwiiterShineButton from '@/components/marketing/follow-twiiter-shine-button'
import { Icons } from '@/components/shared/icons'

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
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className={
        className +
        ' relative flex h-[225vh] flex-col self-auto overflow-hidden pt-20 antialiased [perspective:1000px] [transform-style:preserve-3d]'
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
        <motion.div className="mb-10 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-10 flex flex-row space-x-20">
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
    <>
      <div className="relative left-0 top-0 z-50 mx-auto w-full max-w-7xl px-4 py-10 md:py-20">
        <FollowTwiiterShineButton className="pb-10" />
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
            Empower Your Next Project with Next.js 14, Prisma, PostgreSQL,
            Auth.js v5, Resend, React Email, Shadcn/ui, Stripe Integration and a
            lot of ready made components.
          </BlockTitle.Description>

          <BlockTitle.Background />

          <div className="mx-auto my-14 flex w-full justify-center">
            <a
              href="https://www.producthunt.com/posts/next-saas-template?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-next&#0045;saas&#0045;template"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464422&theme=light"
                alt="Next&#0032;SaaS&#0032;Template - Launching&#0032;your&#0032;SaaS&#0032;success&#0032;story | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </div>

          <div className="z-50 mx-auto flex flex-row items-center justify-center gap-6 text-center">
            <Link
              href="#pricing"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Buy now
            </Link>

            <Link
              href="https://nextsaas.app/"
              target="_blank"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'lg' })
              )}
            >
              See the demo
            </Link>
          </div>
          <p className="my-6 flex align-middle md:mb-6 md:mt-8">
            <svg
              className="mr-2 size-5 animate-pulse fill-primary text-primary"
              viewBox="0 0 161 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_2399)">
                <path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929ZM27.2699 78.0781C27.1857 76.5834 27.051 75.1016 26.9091 73.5403C26.8625 73.0324 26.816 72.516 26.7698 71.9912C26.9453 71.9589 27.1138 71.9265 27.2764 71.8948C27.8156 71.768 28.3657 71.6936 28.9192 71.6703C42.4641 71.6515 56.0103 71.6515 70.0489 71.6528H78.1409C78.1376 75.3741 78.1046 79.0539 78.0729 82.6192C77.9964 91.2594 77.9239 99.4194 78.2432 107.673C78.5626 115.945 79.2622 124.015 80.0026 132.56C80.3025 136.023 80.6121 139.599 80.892 143.165C80.5474 143.265 80.2196 143.368 79.9054 143.467C79.1566 143.75 78.3715 143.924 77.5734 143.984C62.42 144.096 47.4888 144.144 29.7327 144.178H29.7249C29.1714 144.153 28.6218 144.074 28.0841 143.94C27.8801 143.896 27.667 143.852 27.4416 143.81C27.4086 143.469 27.3735 143.133 27.3385 142.8C27.2166 141.822 27.1487 140.838 27.1351 139.852C27.1917 130.616 27.2565 121.38 27.3295 112.144C27.3951 103.234 27.4571 94.3245 27.5154 85.4145C27.5297 82.9278 27.4 80.4295 27.2705 78.0781H27.2699ZM66.5289 35.6309C67.713 35.6212 68.8984 35.5831 70.0806 35.5449C72.3653 35.4725 74.7213 35.3968 76.9801 35.5449C77.7237 40.2083 78.0586 53.6179 77.5838 60.0975C74.2886 60.9096 70.81 60.8552 67.4403 60.7983C65.6408 60.7705 63.7784 60.7394 61.9452 60.8391C56.9515 61.1089 51.8535 61.1465 46.9233 61.1834L42.9532 61.2169C38.3294 61.2602 33.5475 61.3056 28.8661 61.0915C27.5919 61.0332 26.2912 61.0117 25.0338 60.9916C20.9833 60.9269 16.7993 60.8579 12.4618 59.5541L11.3768 36.0255C13.7352 35.7968 16.112 35.8364 18.4615 36.1433C19.6534 36.2559 20.886 36.3732 22.1019 36.4062C25.6594 36.502 29.3512 36.5523 33.3887 36.5588C36.9645 36.5633 40.811 36.5531 44.6821 36.4334C46.5775 36.3745 48.4988 36.26 50.3559 36.15C51.9708 36.0536 53.6407 35.9556 55.2789 35.8909C59.0691 35.7479 62.8533 35.6613 66.5289 35.6315V35.6309ZM50.6169 25.2539L46.5095 19.5205C46.8333 15.9849 48.548 13.9338 52.0512 12.8856C57.2333 11.3326 62.0133 11.3053 66.6533 12.7962C71.9171 14.4882 75.2771 18.0373 77.7684 24.5933L50.6169 25.2539ZM90.3637 23.7886C96.2908 16.8719 104.393 12.1696 113.343 10.4519C116.571 9.78863 120.24 9.57186 123.072 12.9443C123.694 19.2603 123.692 19.4647 121.892 23.5289C121.708 23.5599 121.52 23.5938 121.329 23.6293C120.645 23.7755 119.95 23.8646 119.251 23.8954C110.16 24.0248 100.595 24.1242 90.8139 24.1902C90.7161 24.1163 90.6235 24.0361 90.5367 23.9497C90.4803 23.896 90.422 23.8416 90.3637 23.7892V23.7886ZM87.3438 107.324C87.5692 99.0609 87.5174 90.9682 87.463 82.3998C87.4397 78.8721 87.4176 75.321 87.415 71.7369C94.0223 70.9456 133.713 69.1293 140.326 69.3066C140.197 69.9155 140.063 70.5237 139.929 71.13C139.514 73.0026 139.087 74.9379 138.839 76.8772C137.936 83.9948 137.235 89.9736 136.742 96.0211C136.172 103.036 135.727 110.175 135.297 117.08C135.171 119.109 135.043 121.139 134.914 123.169C134.731 126.049 134.557 128.93 134.392 131.811C134.198 135.111 134.004 138.407 133.789 141.703C133.73 142.066 133.616 142.418 133.448 142.746C133.398 142.864 133.346 142.983 133.295 143.109H85.4814C85.6758 139.563 85.8882 136.042 86.0994 132.539C86.5988 124.263 87.1151 115.705 87.3438 107.325V107.324ZM149.252 32.2648C149.299 32.3329 149.33 32.4108 149.343 32.4926C149.165 40.0276 148.979 47.5629 148.786 55.3179L148.738 57.2726C148.391 57.3412 148.051 57.4128 147.715 57.484C146.745 57.7143 145.759 57.8765 144.766 57.9693C125.98 59.2433 107.1 59.9189 88.638 59.9752C87.6975 54.7748 87.4105 41.4195 88.1198 35.5488C91.9676 34.6914 96.0227 34.602 99.954 34.5134C101.02 34.4901 102.086 34.4669 103.149 34.4281C105.584 34.3421 108.067 34.3276 110.469 34.314C113.07 34.2992 115.76 34.2837 118.406 34.1763C123.742 33.9608 128.973 33.5647 134.308 33.1409C137.82 32.864 141.33 32.5249 144.723 32.1969C146.094 32.0649 147.445 31.9357 148.777 31.8089C148.861 31.8872 148.933 31.9532 148.998 32.0108C149.089 32.0883 149.174 32.1725 149.252 32.2629V32.2648Z"></path>
              </g>
            </svg>
            <span className="mr-1 font-semibold text-primary">35%</span>{' '}
            <span className="mr-1 font-semibold">off</span> for the first 50
            customers (43 Left)
          </p>
        </BlockTitle.Wrapper>
        {/*
        <div className="mb-6 mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="flex flex-col items-center">
            <AvatarsGroup />
          </div>
          
          <div className="flex flex-col items-center gap-1 md:items-start">
            <StarRating />
            <p className="text-sm font-medium">7 users are already shipping</p>
          </div>
          
        </div>
        */}
        <div className="mt-20 flex">
          <div className="relative mx-auto size-10 animate-bounce">
            <Icons.chevronDown className="absolute -inset-1 size-10 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
      <BlockTitle.Wrapper>
        <BlockTitle.Header elementType="h2" className="mt-10">
          Blocks
        </BlockTitle.Header>

        <BlockTitle.Title elementType="h3">Ready-made blocks</BlockTitle.Title>

        <BlockTitle.Description>
          Meet our blocks, see live on demo website
        </BlockTitle.Description>

        <BlockTitle.Background />

        <BlockTitle.Separator />
      </BlockTitle.Wrapper>
    </>
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
        target="_blank"
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={imageUrl}
          height="600"
          width="600"
          className="absolute inset-0 size-full object-cover object-left-top"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 size-full bg-slate-300 opacity-0 group-hover/product:opacity-80 dark:bg-black"></div>
      <h2 className="absolute bottom-6 left-6 text-xl font-semibold text-primary opacity-0 group-hover/product:opacity-100 dark:text-white">
        {product.title}
      </h2>
    </motion.div>
  )
}
