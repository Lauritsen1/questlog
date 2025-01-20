import { GameCover } from '@/components/game-cover'

async function getGames() {
  const res = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID || '',
      'Authorization': `Bearer ${process.env.IGDB_AUTHORIZATION || ''}`,
    },
    body: 'fields name, cover.url; limit 36;',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch games: ${res.status} ${res.statusText}`)
  }

  return res.json()
}

export default async function GamesPage() {
  const data = await getGames()

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
