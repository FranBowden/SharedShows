import React, { useEffect, useState } from "react";

interface Popcorn {
  id: number;
  x: number;
  y: number;
}

export default function FallingPopcorn() {
  const [popcorns, setPopcorns] = useState<Popcorn[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newPopcorn = {
        id: idCounter,
        x: e.clientX,
        y: e.clientY,
      };
      setPopcorns((prev) => [...prev, newPopcorn]);
      setIdCounter((prev) => prev + 1);

      setTimeout(() => {
        setPopcorns((prev) => prev.filter((p) => p.id !== newPopcorn.id));
      }, 2000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [idCounter]);

  return (
    <>
      {popcorns.map((p) => (
        <img
          key={p.id}
          src="/corn.cur"
          alt="popcorn"
          className="fixed z-[9999] w-24 h-24 z-100 fall pointer-events-none"
          style={{ left: p.x - 16, top: p.y - 16 }}
        />
      ))}
    </>
  );
}
