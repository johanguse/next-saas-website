'use client'

import { useMounted } from '@/hooks/use-mounted'

import { CollectEmailsModal } from '@/components/modals/collect-emails-modal'

export const ModalProvider = () => {
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  return (
    <>
      <CollectEmailsModal />
      {/* add your own modals here... */}
    </>
  )
}
