import "dotenv/config";
import FilmsProp from "../../../shared/FilmsProp.ts";
import Film from "../../../shared/Film.ts";
const apiKey = process.env.WATCHMODE_API_KEY;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

function getCountryCode(country: string): string {
  switch (country) {
    case "Australia":
      return "AU";
    case "Brazil":
      return "BR";
    case "Canada":
      return "CA";
    case "England":
      return "GB";
    case "India":
      return "IN";
    case "Spain":
      return "ES";
    case "USA":
      return "US";
    default:
      return "";
  }
}

function getServiceCode(service: string): string {
  switch (service) {
    case "Netflix":
      return "203";
    case "Disney+":
      return "372";
    case "Amazon Prime":
      return "26";
    default:
      return "";
  }
}
export async function fetchFilms({
  country,
  service,
}: FilmsProp): Promise<Film[]> {
  try {
    const code = getCountryCode(country);
    const id = getServiceCode(service);
    const url = `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&regions=${code}&source_ids=${id}&page=1`;

    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);

    const data: { titles: Film[] } = await response.json();

    const films = data.titles.slice(0, 36);

    const filmsWithoutPosters: Film[] = films.map((film) => ({
      ...film,
      poster: film.poster || null,
    }));

    const filmsWithPosters: Film[] = await Promise.all(
      films.map(async (film) => {
        if (film.poster) return film;

        if (film.tmdb_id) {
          try {
            const type = film.tmdb_type === "tv" ? "tv" : "movie";
            const tmdbUrl = `https://api.themoviedb.org/3/${type}/${film.tmdb_id}?api_key=${TMDB_API_KEY}`;
            const tmdbData = await fetch(tmdbUrl).then((res) => res.json());
            return {
              ...film,
              poster: tmdbData.poster_path
                ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`
                : null,
            };
          } catch {
            return { ...film, poster: null };
          }
        }
        return { ...film, poster: null };
      })
    );

    return filmsWithPosters;
  } catch (e) {
    console.error("Error: ", e);
    return [];
  }
}
