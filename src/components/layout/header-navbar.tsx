'use client'

import { useCurrentUser } from '@/hooks/use-current-user'
import useScroll from '@/hooks/use-scroll'
import { useSigninModal } from '@/hooks/use-signin-modal'

import { MainNav } from '@/components/layout/navigation/main/main-nav'

import { MainNavItem } from '@/root/types'
import { User } from 'next-auth'

interface NavBarProps {
  user: Pick<User, 'name' | 'image' | 'email'> | undefined
  items?: MainNavItem[]
  children?: React.ReactNode
  rightElements?: React.ReactNode
  scroll?: boolean
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50)
  const signInModal = useSigninModal()
  const user = useCurrentUser()

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : 'bg-background/0') : 'border-b'
      }`}
    >
      <div className="container flex h-[60px] items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">{rightElements}</div>
      </div>
    </header>
  )
}