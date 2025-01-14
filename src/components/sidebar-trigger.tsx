'use client'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button size="icon" variant="ghost" onClick={toggleSidebar}>
      <Menu />
    </Button>
  )
}
