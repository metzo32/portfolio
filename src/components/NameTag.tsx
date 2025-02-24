"use client"

import { useState, useEffect } from "react";

export default function NameTag() {
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

  return (
    <div
      className={`name-tag ${
        isVisible ? "translate-y-0" : "translate-y-[400%]"
      }`}
    >
      <span className="opacity-50 font-light">SEYEON.OH</span>
    </div>
  );
}
