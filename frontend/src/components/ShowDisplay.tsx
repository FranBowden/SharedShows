import React from "react";
import Film from "../../../SharedInterfaces/Film";

export default function ShowDisplay({ films }: { films: Film[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8 px-4">
      {films.map((film) => (
        <div
          key={film.id}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <img
            // src={film.image}
            alt={film.title}
            className="w-full h-44 object-cover rounded mb-3"
          />
          <p className="font-semibold text-center mb-1">{film.title}</p>
          <p className="text-sm text-gray-500">{film.type}</p>
        </div>
      ))}
    </div>
  );
}
