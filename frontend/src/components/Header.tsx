import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-10 w-full h-full">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-t from-red-800 to-red-600 drop-shadow-xl">
        Shared Shows
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-lg mt-2">
        Compare your streaming services and discover shows you and your friends
        both enjoy.
      </p>
    </div>
  );
}
