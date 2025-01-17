'use client'

import { getGames } from '@/server/actions'
import { useQuery } from '@tanstack/react-query'

import { GameCover } from '@/components/game-cover'

export default function Home() {
  const { data, error, isPending } = useQuery({
    queryKey: ['games'],
    queryFn: getGames,
  })

  if (error) return <div>Error: {error.message}</div>
  if (isPending) return <div>Loading...</div>

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {data.map((game: any) => (
          <GameCover key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
