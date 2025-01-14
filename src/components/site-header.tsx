'use client'

import { useSidebar } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/sidebar-trigger'

import { ModeToggle } from './mode-toggle'

export function SiteHeader() {
  const { isMobile } = useSidebar()
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <span className="inline-block font-bold">Questlog</span>
        <div className="space-x-4">
          <ModeToggle />
          {isMobile && <SidebarTrigger />}
        </div>
      </div>
    </header>
  )
}
