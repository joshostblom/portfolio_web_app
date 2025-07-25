import { useState, useEffect } from "react";
import me from "/images/me.jpg";
import StarBackground from "./StarBackground.jsx";

function TitleCard(props) {
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

  return (
    <div className="relative h-screen w-full">
      <StarBackground isDarkMode={props.isDarkMode} />

      <div className="flex flex-col h-full md:flex-row gap-5 items-center justify-center relative z-10">
        <img
          src={me}
          className="h-auto rounded-full shadow-md w-44 md:w-60 lg:w-80"
        />
        <div className="p-5 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800 text-4xl text-right font-bold md:text-4xl lg:text-5xl">
          {visibleText.split("").map((char, i) => {
            const isBlue = i >= 8 && i < 20; // highlight "Josh Ostblom"
            const className =
              char === "\n"
                ? "block"
                : isBlue
                ? "inline text-blue-600"
                : "inline";

            return (
              <span key={i} className={className}>
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
