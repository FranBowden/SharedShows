import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 text-center py-4 text-sm border-t border-zinc-800">
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
    </footer>
  );
}
