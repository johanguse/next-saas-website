'use client'

import { useTimeAgo } from 'next-timeago'

export default function TimeAgo({ createdAt }: { createdAt: string }) {
  const { TimeAgo } = useTimeAgo()

  return (
    <>
      <TimeAgo date={createdAt} />
    </>
  )
}
