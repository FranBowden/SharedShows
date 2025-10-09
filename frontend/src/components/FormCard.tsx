import React, { Dispatch, SetStateAction, useState } from "react";
import DropdownList from "./DropDownCountryList";
import DropDownServiceList from "./DropDownServicelist";
import { HandleButton } from "../utils/handleButtonLogic";
import Film from "../../../SharedInterfaces/Film";

interface FormCardProps {
  setViewFilms: Dispatch<SetStateAction<boolean>>;
  setFilms: Dispatch<SetStateAction<Film[]>>;
}

export default function FormCard({ setViewFilms, setFilms }: FormCardProps) {
  const [country1, setCountry1] = useState<string>("");
  const [country2, setCountry2] = useState<string>("");
  const [service, setService] = useState<string>("");

  return (
    <form className="bg-zinc-900 shadow-2xl rounded-3xl p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <div className="grid grid-cols-2 gap-6">
        <DropdownList
          label="Choose a country:"
          id="country1"
          setValue={setCountry1}
        />
        <DropdownList
          label="Choose another:"
          id="country2"
          setValue={setCountry2}
        />
      </div>

      <div className="mt-6">
        <DropDownServiceList
          label="Choose a service:"
          id="service"
          setValue={setService}
        />
      </div>

      <button
        type="submit"
        id="submit-Btn"
        className="mt-8 w-full rounded-2xl bg-gradient-to-t from-red-800 to-red-600 drop-shadow-xl px-6 py-3 text-white font-semibold shadow-lg hover:from-red-800 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
        onClick={async (e) => {
          e.preventDefault();
          setViewFilms(true);

          const films = await HandleButton({ country1, country2, service });

          setFilms(films);
        }}
      >
        Search
      </button>
    </form>
  );
}
