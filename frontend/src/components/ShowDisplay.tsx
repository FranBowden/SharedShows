import React, { useEffect, useState } from "react";
import Film from "../../../shared/Film";

interface ShowDisplayProps {
  films: Film[];
}
export default function ShowDisplay({ films }: { films: Film[] }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 max-w-[1500px] w-full">
        {films.map((film) => (
          <div
            key={film.id}
            className="relative w-full overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={
                film.poster ||
                "https://placehold.co/300x450/000000/ffffff?text=No+Poster"
              }
              alt={film.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2">
              <p className="font-semibold text-center text-sm">{film.title}</p>
              <p className="text-xs text-center opacity-80">{film.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
