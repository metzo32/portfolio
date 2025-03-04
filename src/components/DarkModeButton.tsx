"use client";

import { useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";
import { useDark } from "@/store/useDark";

export default function DarkModeButton() {
  const { isDark, toggleDark, setDark } = useDark();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setDark(savedTheme === "dark");
  }, [setDark]);

  return (
    <button onClick={toggleDark} className="dark-button">
      {isDark ? <HiSun /> : <HiMoon />}
    </button>
  );
}
