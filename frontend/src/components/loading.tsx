import React, { useState, useEffect } from "react";
import ShowDisplay from "../components/showDisplay";
import { fetchFilms } from "../services/FetchFilms";
import { CountriesProp } from "../../interfaces/CountryProp";
import Film from "../../../SharedInterfaces/Film";

export default function FilmGrid({
  country1,
  country2,
  service,
}: CountriesProp) {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFilms = async () => {
      setLoading(true);
      const data1 = await fetchFilms({ country: country1, service });
      const data2 = await fetchFilms({ country: country2, service });

      // find common films
      const commonFilms = data1.filter((f1) =>
        data2.some((f2) => f2.id === f1.id)
      );

      setFilms(commonFilms);
      setLoading(false);
    };

    loadFilms();
  }, [country1, country2, service]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600"></div>
        </div>
      ) : (
        <ShowDisplay films={films} />
      )}
    </div>
  );
}
