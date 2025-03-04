"use client"

import { useCallback } from "react";
import confetti from "canvas-confetti";

const Firework = () => {
  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.7 },
    });
  }, []);

  return (
    <div className="firework-container">
      <button onClick={fireConfetti} className="fire-button">
        🎇 Fire Confetti!
      </button>
    </div>
  );
};

export default Firework;
