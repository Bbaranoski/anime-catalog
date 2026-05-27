import { Anime } from "../types/anime";

interface AnimeCardProps {
    anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
    return (
        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition hover:scale-105">
            <img className="h-[300] w-full object-cover"
                src={anime.images.jpg.image_url}
                alt={anime.title}
            />

            <div className="p-4">
                <h2 className="line-clamp-1 text-lg font-bold">
                    {anime.title}
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                    ⭐ {anime.score}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-zinc-300">
                    {anime.synopsis}
                </p>
            </div>
        </div>
    )
}