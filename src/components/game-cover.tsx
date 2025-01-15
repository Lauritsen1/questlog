import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'

type Game = {
  id: number
  name: string
  cover: {
    id: number
    url: string
  }
}

export function GameCover({ game }: { game: Game }) {
  const coverUrl = game.cover?.url.replace('t_thumb', 't_cover_big')

  return (
    <div className="transition duration-300 ease-out hover:scale-105">
      <Link href="#" className="block">
        <AspectRatio ratio={3 / 4}>
          {coverUrl ? (
            <Image
              src={`https:${coverUrl}`}
              className="rounded border"
              fill
              alt={`${game.name} Cover`}
            />
          ) : (
            <div className="grid h-full place-items-center rounded border p-2">
              <span className="text-center">{game.name}</span>
            </div>
          )}
        </AspectRatio>
      </Link>
    </div>
  )
}
