import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 text-center py-4 text-sm border-t border-zinc-800 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
      <p>
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
      <span>|</span>
      <p>
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
