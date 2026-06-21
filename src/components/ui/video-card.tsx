import Image from "next/image"
import { PlayCircle } from "lucide-react"

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export function VideoCard({ title, thumbnailUrl, videoUrl }: VideoCardProps) {
  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="bg-[var(--color-card)] border border-[var(--color-card-border)] overflow-hidden transition-colors hover:border-[var(--color-saffron)]">
        <div className="relative aspect-video w-full bg-black">
          <Image 
            src={thumbnailUrl} 
            alt={title} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-white/70 group-hover:text-[var(--color-saffron)] group-hover:scale-110 transition-all" />
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-display font-bold text-lg leading-tight line-clamp-2">{title}</h4>
        </div>
      </div>
    </a>
  )
}
