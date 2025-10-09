import { fetchFilms } from "../services/FetchFilms";
import Film from "../../../SharedInterfaces/Film";

import { CountriesProp } from "../../interfaces/CountryProp";
export async function HandleButton({
  country1,
  country2,
  service,
}: CountriesProp): Promise<Film[]> {
  const country1Data: Film[] = await fetchFilms({ country: country1, service });
  const country2Data: Film[] = await fetchFilms({ country: country2, service });

  console.log(country1, ":", country1Data);
  console.log(country2, ":", country2Data);
  //Filter common films by id
  try {
    const commonFilms: Film[] = country1Data.filter((film1) =>
      country2Data.some((film2) => film2.id === film1.id)
    );
    console.log("CommonFilms:", commonFilms);

    const uniqueCommonFilms: Film[] = Array.from(
      new Map(commonFilms.map((film) => [film.id, film])).values()
    );

    return uniqueCommonFilms;
  } catch (e) {
    console.error(e);
  }
  return [];
  //Remove duplicates
}
