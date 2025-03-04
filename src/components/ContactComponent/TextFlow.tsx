"use client";

import { useState, useEffect, useRef } from "react";
import ContactText from "./ContactText";

const words = ["기회", "새로움", "도전", "성장"];

export default function TextFlow() {
  const [currentText, setCurrentText] = useState(words[0]);
  const [isRolling, setIsRolling] = useState(true);
  const [isClicked, setIsClicked] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRolling) {
      intervalRef.current = setInterval(() => {
        setCurrentText((prev) => {
          const nextIndex = (words.indexOf(prev) + 1) % words.length;
          return words[nextIndex];
        });
      }, 150);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRolling]);

  const handleClick = () => {
    setIsRolling(false)
    setIsClicked(true)
  }

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="contact-container">
        <div className="contact-title-box group" onClick={handleClick}>
          <h1 className={`contact-name ${!isRolling && "clicked"}`}>[</h1>
          <h1 className={`contact-name ${!isRolling && "clicked"}`}>{currentText}</h1>
          <h1 className={`contact-name ${!isRolling && "clicked"}`}>]</h1>
        </div>
        <p className={`contact-text ${isRolling ? "" : "clicked"}`}>에 열려있습니다.</p>
      </div>
        {isClicked && <ContactText/>}
    </div>
  );
}
