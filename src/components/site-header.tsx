import { ModeToggle } from './mode-toggle'

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <span className="inline-block font-bold">Questlog</span>
        <ModeToggle />
      </div>
    </header>
  )
}
