import { useState, useEffect } from "react";
import me from "/images/me.jpg";
import StarBackground from "./StarBackground.jsx";

function TitleCard() {
  const fullText = `Hi, I'm Josh Ostblom,\na Software Engineer.`;
  const totalChars = fullText.length;

  const [visibleCount, setVisibleCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (visibleCount < totalChars) {
      const timeout = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 65); // controls typing speed
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCursorVisible(false);
      }, 750);
    }
  }, [visibleCount]);

  const visibleText = fullText.slice(0, visibleCount);
  const CONFETTI_COLORS = [
    "#60A5FA", // blue-400
    "#F87171", // red-400
    "#34D399", // green-400
    "#FBBF24", // yellow-400
    "#A78BFA", // violet-400
    "#F472B6", // pink-400
  ];

  return (
    <div className="relative h-screen w-full">
      <StarBackground />

      <div className="flex flex-col h-full md:flex-row gap-5 items-center justify-center relative z-10">
        <img
          src={me}
          className="h-auto rounded-full shadow-md w-44 md:w-60 lg:w-96"
        />
        <div className="p-5 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800 text-4xl font-bold md:text-4xl lg:text-5xl">
          {visibleText.split("").map((char, i) => {
            const isNameChar = i >= 8 && i < 20; // "Josh Ostblom"
            const confettiColor =
              isNameChar && CONFETTI_COLORS[(i - 8) % CONFETTI_COLORS.length];

            const style = isNameChar ? { color: confettiColor } : {};

            return (
              <span
                key={i}
                className={char === "\n" ? "block" : "inline"}
                style={style}
              >
                {char}
              </span>
            );
          })}

          {/* Blinking Cursor */}
          {cursorVisible && (
            <span className="inline-block w-[0.5ch] animate-blink">|</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
