/// <reference types="vite/client" />
import FilmsProp from "../../../shared/FilmsProp";
import Film from "../../../shared/Film";
export async function fetchFilms({
  country,
  service,
  page,
}: FilmsProp): Promise<Film[]> {
  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const res = await fetch(
      `${API_URL}/films?country=${country}&service=${service}&page=${page}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch films: ${res.statusText}`);
    }

    const data: Film[] = await res.json();
    return data;
  } catch (e) {
    console.log("Fetching Error: ", e);
    return [];
  }
}
