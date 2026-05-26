import { apiFetch } from "@/api/BaseUrl";

export async function getTopAnime() {
    const data: any = await apiFetch("/top/anime");

    return data.data;
}