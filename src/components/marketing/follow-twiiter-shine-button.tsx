import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Icons } from '../shared/icons'

export default function FollowTwiiterShineButton({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        className,
        ' my-6 flex items-center justify-center rounded'
      )}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
        <Link
          href="https://twitter.com/SaasTemplate"
          className="relative flex rounded bg-black px-6 py-3 font-semibold text-white"
          target="_blank"
        >
          <div className="flex items-center">
            Follow on <Icons.twitter className="ml-2 size-4" />
          </div>
        </Link>
      </div>
    </div>
  )
}
