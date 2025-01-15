'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { ModeToggle } from '@/components/mode-toggle'
import { SidebarTrigger } from '@/components/sidebar-trigger'

export function SiteHeader() {
  const isMobile = useIsMobile()
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
