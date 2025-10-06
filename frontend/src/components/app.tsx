import React from "react";
import DropdownList from "./DropDownCountryList";
import DropDownServiceList from "./DropDownServicelist";
import Header from "./Header";

export default function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />

      <div className="flex justify-center m-10">
        <form className="bg-zinc-900 shadow-lg rounded-2xl p-6 w-[28rem] max-h-fit">
          <div className="grid grid-cols-2 gap-4">
            <DropdownList label="Choose a country:" id="country1" />
            <DropdownList label="Choose another:" id="country2" />
          </div>

          <div className="mt-4">
            <DropDownServiceList label="Choose a service:" id="service" />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-red-600 px-4 py-2 text-white font-medium shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
