"use client";

import { useState, useEffect } from "react";
import DarkModeButton from "./DarkModeButton";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`top-button-container ${
        isVisible ? "translate-y-0" : "translate-y-[250%]"
      }`}
    >
      <DarkModeButton />
      <button onClick={scrollToTop} className={`top-button`}>
        Top
      </button>
    </div>
  );
}
