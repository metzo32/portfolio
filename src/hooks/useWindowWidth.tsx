import { useState, useEffect, useMemo } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWide = useMemo(() => windowWidth > 768, [windowWidth]);

  return {windowWidth, isWide};
}
