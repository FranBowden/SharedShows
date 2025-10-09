import React, { useEffect, useState } from "react";
import Header from "./Header";
import FormCard from "./FormCard";
import Footer from "./Footer";
import ShowDisplay from "./showDisplay";
import Film from "../../../shared/Film";
import CustomCursor from "./cursor";
import FallingPopcorn from "./Popcorn";

export default function App() {
  const [viewFilms, setViewFilms] = useState(false);
  const [films, setFilms] = useState<Film[]>([]);
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left side Header*/}
        {!viewFilms && (
          <div className="md:w-1/2 bg-gradient-to-t from-zinc-900 to-zinc-800 flex items-center justify-center">
            <Header />
          </div>
        )}

        {/* Right side Form */}
        {!viewFilms && (
          <div className="md:w-1/2 flex justify-center items-center p-10">
            <FormCard setViewFilms={setViewFilms} setFilms={setFilms} />
          </div>
        )}

        {viewFilms && (
          <div className="flex justify-center w-full mt-20">
            <ShowDisplay films={films} />
          </div>
        )}
      </div>

      <FallingPopcorn />
      <CustomCursor />
      <Footer />
    </div>
  );
}
