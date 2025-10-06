import React from "react";
import DropdownList from "./DropDownCountryList";
import DropDownServiceList from "./DropDownServicelist";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <Header />

      <main className="flex-grow flex justify-center items-start py-10">
        <form className="bg-zinc-900 shadow-lg rounded-2xl p-6 max-w-md w-full">
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
      </main>

      <Footer />
    </div>
  );
}
