import "dotenv/config";
import FilmsProp from "../../../SharedInterfaces/FilmsProp.ts";
import Film from "../../../SharedInterfaces/Film.ts";
const apiKey = process.env.WATCHMODE_API_KEY;

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

export async function fetchFilms({ country, service }: FilmsProp) {
  try {
    const code = getCountryCode(country);
    const id = getServiceCode(service);
    const url = `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&regions=${code}&source_ids=${id}&page=1`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Response Not OK: ${response.status} ${response.statusText}`
      );
    }
    const data: Film[] = await response.json();

    return data;
  } catch (e) {
    console.error("Error: ", e);
    return [];
  }
}
