import { getTopAnime } from "@/features/anime/services/animeServices";

export default async function Home() {
  const animes = await getTopAnime();

  console.log(animes)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

    </div>
  );
}
