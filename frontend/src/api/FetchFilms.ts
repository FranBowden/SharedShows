/// <reference types="vite/client" />

export async function fetchFilms() {
  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const res = await fetch(`${API_URL}/api/benches`);

    if (!res.ok) {
      throw new Error(`Failed to fetch films: ${res.statusText}`);
    }

    const filmsData = res.json();

    return filmsData;
  } catch (e) {
    console.log("Fetching Error: ", e);
  }
}
