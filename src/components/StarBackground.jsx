import { useState, useEffect } from "react";

// 1. Hoist mask styles so the object is stable
const MASK_STYLES = {
  WebkitMaskImage:
    "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
  maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 95%)",
  WebkitMaskMode: "alpha",
  maskMode: "alpha",
};

// 2. Responsive count hook
function useResponsiveCount(baseCount) {
  const getCount = (w) => {
    if (w < 640) return Math.floor(baseCount * 0.2);
    if (w < 1024) return Math.floor(baseCount * 0.5);
    return baseCount;
  };

  const [count, setCount] = useState(() =>
    getCount(typeof window !== "undefined" ? window.innerWidth : baseCount)
  );

  useEffect(() => {
    let frame = null;
    const onResize = () => {
      const next = getCount(window.innerWidth);
      setCount((prev) => (prev === next ? prev : next));
      frame = null;
    };
    const handler = () => {
      if (!frame) frame = requestAnimationFrame(onResize);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [baseCount]);

  return count;
}

// 3. Confetti colors array
const CONFETTI_COLORS = [
  "#F87171", // red-400
  "#FBBF24", // yellow-400
  "#34D399", // green-400
  "#60A5FA", // blue-400
  "#A78BFA", // violet-400
  "#F472B6", // pink-400
];

// 4. Star generator with color property
function generateStars(n) {
  return Array.from({ length: n }).map(() => {
    const size = Math.random() * 8 + 2;

    return {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animation: `twinkle ${(Math.random() * 3 + 2).toFixed(2)}s ease-in-out ${(
        Math.random() * 5
      ).toFixed(2)}s infinite`,
      color:
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    };
  });
}

const StarBackground = (props) => {
  // 5. Get adaptive star count
  const starCount = useResponsiveCount(750);

  // 6. Manage stars in state, adding/removing only the delta
  const [stars, setStars] = useState(() => generateStars(starCount));

  useEffect(() => {
    setStars((prev) => {
      const delta = starCount - prev.length;
      if (delta > 0) return [...prev, ...generateStars(delta)];
      if (delta < 0) return prev.slice(0, starCount);
      return prev;
    });
  }, [starCount]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={MASK_STYLES}
    >
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
            animation: star.animation,
            backgroundColor: props.isDarkMode ? "#ffffff" : star.color,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
