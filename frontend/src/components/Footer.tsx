import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-4 text-sm border-t border-zinc-800 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center px-4">
      <p className="flex flex-wrap justify-center items-center gap-1">
        Data provided by{" "}
        <a
          href="https://www.watchmode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:underline"
        >
          Watchmode
        </a>
      </p>

      <span className="hidden sm:inline">|</span>

      <p className="flex flex-wrap justify-center items-center gap-1">
        Posters by{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:underline"
        >
          TMDB
        </a>
      </p>

      <span className="hidden sm:inline">|</span>

      <p className="flex flex-wrap justify-center items-center gap-1">
        <a
          href="https://github.com/FranBowden/SharedShows"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:underline transition"
        >
          GitHub Repository
        </a>
      </p>
    </footer>
  );
}
