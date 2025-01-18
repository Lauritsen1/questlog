'use server'

const config = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Client-ID': process.env.IGDB_CLIENT_ID || '',
    'Authorization': `Bearer ${process.env.IGDB_AUTHORIZATION || ''}`,
  },
}

export async function getGames() {
  const res = await fetch('https://api.igdb.com/v4/games', {
    ...config,
    body: 'fields name, cover.url; limit 36;',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch games: ${res.status} ${res.statusText}`)
  }

  return res.json()
}
