import React from "react";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white shadow-md py-6 px-6 text-center">
      <h1 className="text-3xl font-bold">Stream Overlap</h1>
      <p className="text-gray-300 mt-2 text-sm">
        Compare your streaming services and find shows in common
      </p>
    </header>
  );
}
