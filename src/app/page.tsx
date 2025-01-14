import { GameCover } from '@/components/game-cover'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <GameCover key={index} />
        ))}
      </div>
    </div>
  )
}
