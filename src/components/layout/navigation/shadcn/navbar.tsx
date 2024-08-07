'use client'

import { cn } from '@/lib/utils'

import useScroll from '@/hooks/use-scroll'

import { MainNav } from '@/components/layout/navigation/shadcn/main-nav'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'
import ChangelogButton from '@/components/shared/changelog-button'

import { ModeToggle } from '../../mode-toggle'
import MobileSheetMenu from '../shadcn/mobile-sheet-menu'
import { MainNavItem } from '@/root/types'

interface NavBarProps {
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

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all',
        { 'border-b': scroll ? scrolled : true },
        { 'bg-background/0': scroll && !scrolled }
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-1 md:space-x-3">
          {rightElements}

          <>
            <ul className="mr-0 flex items-center space-x-1 md:mr-4 md:space-x-4">
              <li>
                <ChangelogButton />
              </li>
              <li>
                <ButtonShareFeedback />
              </li>
              <li className="hidden md:block">
                <ModeToggle />
              </li>
            </ul>
          </>

          <MobileSheetMenu />
        </div>
      </div>
    </header>
  )
}
