import React from "react";
import Film from "../../../SharedInterfaces/Film";

export default function ShowDisplay({ films }: { films: Film[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 px-4">
      {films.map((film) => (
        <div
          key={film.id}
          className="relative w-full overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={film.poster || "/placeholder.png"} // always has an image
            alt={film.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2">
            <p className="font-semibold text-center text-sm">{film.title}</p>
            <p className="text-xs text-center">{film.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
