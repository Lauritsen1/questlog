import { GameCover } from '@/components/game-cover'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <GameCover />
      <GameCover />
      <GameCover />
      <GameCover />
      <GameCover />
    </div>
  )
}
