import { GameCover } from '@/components/game-cover'

type Game = {
  id: number
  name: string
  cover: {
    id: number
    url: string
  }
}

export default async function Home() {
  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.IGDB_CLIENT_ID || '',
      'Authorization': `Bearer ${process.env.IGDB_AUTHORIZATION || ''}`,
    },
    body: 'fields name, cover.url;',
  })

  const data: Game[] = await response.json()

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {data.map((game) => (
          <GameCover key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
