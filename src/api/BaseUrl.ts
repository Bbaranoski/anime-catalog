export const baseUrl = "https://api.jikan.moe/v4";

export async function apiFetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(
        `${baseUrl}${endpoint}`
    );

    if (!response.ok) {
        throw new Error("Erro na requisição");
    }

    return response.json();
}