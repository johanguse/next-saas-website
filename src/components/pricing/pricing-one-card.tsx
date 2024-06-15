import { Badge } from '@/components/ui/badge'
import { Button as ButtonUI } from '@/components/ui/button-ui'

import { BlockTitle } from '@/components/layout/main-title'
import TimeAgo from '@/components/time-ago'

export default function OneCardPricingTable() {
  return (
    <div className="container relative z-20 mx-auto max-w-7xl lg:px-8">
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
        <div className="flex flex-row gap-4">
          <ButtonUI
            variant="link"
            className="font-semibold underline underline-offset-4"
            href="https://bit.ly/48LTNin"
            target="_blank"
          >
            Public road map
          </ButtonUI>
          <ButtonUI
            variant="secondary"
            className="font-semibold"
            href="https://nextsaas.app"
            target="_blank"
          >
            See the demo app
          </ButtonUI>
        </div>
      </BlockTitle.Wrapper>
      <div className="mx-auto mt-8 max-w-2xl gap-4 rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 dark:text-white sm:p-10 lg:flex-auto">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            One time purchase
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Buy now and receive the full code immediately.
            <br />
            Have question?
            <a
              href="/contact"
              className="text-blue-500 underline underline-offset-4 dark:text-blue-400"
            >
              Just email us here!
            </a>
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700"></div>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:grid-cols-2 sm:gap-6">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                id="IconChangeColor"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                      clipRule="nonzero"
                      id="mainIconPathAttribute"
                      fill="green"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#id1)">
                  <path
                    fill="green"
                    d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                    fillOpacity="1"
                    fillRule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </g>
              </svg>{' '}
              <span className="mx-1 font-bold">Support</span>
              <span>by Email</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                id="IconChangeColor"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                      clipRule="nonzero"
                      id="mainIconPathAttribute"
                      fill="green"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#id1)">
                  <path
                    fill="green"
                    d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                    fillOpacity="1"
                    fillRule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </g>
              </svg>{' '}
              <span className="mx-1 font-bold">Github</span>
              <span>Access</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                id="IconChangeColor"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                      clipRule="nonzero"
                      id="mainIconPathAttribute"
                      fill="green"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#id1)">
                  <path
                    fill="green"
                    d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                    fillOpacity="1"
                    fillRule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </g>
              </svg>{' '}
              <span className="mx-1 font-bold">Lifetime</span>
              <span>Updates</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                id="IconChangeColor"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.847656 4.792969 L 26.796875 4.792969 L 26.796875 24.390625 L 2.847656 24.390625 Z M 2.847656 4.792969 "
                      clipRule="nonzero"
                      id="mainIconPathAttribute"
                      fill="green"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#id1)">
                  <path
                    fill="green"
                    d="M 11.078125 24.3125 L 2.847656 15.890625 L 6.128906 12.53125 L 11.078125 17.597656 L 23.519531 4.875 L 26.796875 8.230469 Z M 11.078125 24.3125 "
                    fillOpacity="1"
                    fillRule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </g>
              </svg>{' '}
              <span className="mx-1 font-bold">Pay once.</span>
              <span>Build unlimited projects</span>
            </li>
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
          <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:bg-gray-900 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-2">
              <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                Lifetime
              </p>
              <p className="my-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="px-2 text-gray-700 line-through dark:text-gray-500">
                    $199
                  </span>
                  <span className="italic">$129.35</span>
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                  USD
                </span>
              </p>
              <Badge className="mb-6">
                <span className="mr-1">Last update:</span>
                <TimeAgo createdAt="June 15, 2024 14:50" />
              </Badge>
              <a
                //href="https://buy.stripe.com/bIY9BE2cvgFb8CI288?prefilled_promo_code=LAUNCH"
                href="https://bit.ly/NST-LAUNCH1"
                className="my-6 block w-full rounded-sm bg-blue-600 py-2 text-white dark:bg-white dark:text-gray-800"
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
