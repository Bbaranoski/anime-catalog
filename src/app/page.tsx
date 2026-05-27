import { getTopAnime } from "@/features/anime/services/animeServices";
import AnimeCard from "@/features/anime/components/AnimeCard";
import { Anime } from "@/features/anime/types/anime";

export default async function Home() {
  const animes = await getTopAnime();

  console.log(animes)
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime: Anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </div>
  );
}
