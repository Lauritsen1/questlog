import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'

export function GameCover() {
  return (
    <div className="transition duration-300 ease-out hover:scale-105">
      <Link href="#" className="block">
        <AspectRatio ratio={3 / 4}>
          <Image
            src="https://images.igdb.com/igdb/image/upload/t_720p/co670h.jpg"
            fill={true}
            alt="Game Cover"
          />
        </AspectRatio>
      </Link>
    </div>
  )
}
