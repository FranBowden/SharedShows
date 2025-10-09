import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    const handleClick = () => {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <img
      src="/popcorn.cur"
      alt="cursor"
      className={`fixed pointer-events-none w-16 h-16 z-[9999] transition-transform ${
        shake ? "cursor-shake" : ""
      }`}
      style={{ left: position.x - 24, top: position.y - 24 }}
    />
  );
}
