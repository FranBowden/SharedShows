import React, { useEffect, useState } from "react";

interface Popcorn {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shake, setShake] = useState(false);
  const [overSpecial, setOverSpecial] = useState(false); // forms or links
  const [popcorns, setPopcorns] = useState<Popcorn[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });

    const handleClick = (e: MouseEvent) => {
      setShake(true);
      setTimeout(() => setShake(false), 300);

      if (!overSpecial) {
        const id = Date.now();
        setPopcorns((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
        setTimeout(
          () => setPopcorns((prev) => prev.filter((p) => p.id !== id)),
          2000
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isSpecial =
        target.closest("form") ||
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "LABEL", "A"].includes(
          target.tagName
        );
      setOverSpecial(!!isSpecial);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [overSpecial]);

  return (
    <>
      {/* Popcorn cursor image */}
      {!overSpecial && (
        <img
          src="/popcorn.cur"
          alt="cursor"
          className={`fixed pointer-events-none w-16 h-16 z-[9999] transition-transform ${
            shake ? "cursor-shake" : ""
          } popcorn-active`}
          style={{ left: position.x - 24, top: position.y - 24 }}
        />
      )}

      {/* Falling popcorn */}
      {popcorns.map((p) => (
        <img
          key={p.id}
          src="/corn.cur"
          alt="popcorn"
          className="fixed w-24 h-24 z-[9999] pointer-events-none fall"
          style={{ left: p.x - 16, top: p.y - 16 }}
        />
      ))}
    </>
  );
}
