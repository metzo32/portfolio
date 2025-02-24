"use client"

import { useState, useEffect } from "react";

const words = ["🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Grape", "🍉 Watermelon"];

export default function SlotMachine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const [spinSpeed, setSpinSpeed] = useState(100); // 초기 속도 (빠르게 회전)

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const totalTime = 2000; // 2초 동안 실행
    const speedDecay = 1.2; // 점점 느려지는 비율

    if (isSpinning) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSpinSpeed((prevSpeed) => prevSpeed * speedDecay); // 점점 느려짐
      }, spinSpeed);

      setTimeout(() => {
        clearInterval(interval);
        setCurrentIndex(1); // 최종적으로 'Banana'에서 멈춤
        setIsSpinning(false);
      }, totalTime);
    }

    return () => clearInterval(interval);
  }, [isSpinning, spinSpeed]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-40 h-20 flex items-center justify-center border-4 border-gray-500 rounded-lg shadow-lg bg-white overflow-hidden">
        <span
          className={`text-2xl font-bold transition-transform ${
            isSpinning ? "animate-spin-slow" : "opacity-100"
          }`}
          style={{ transition: "transform 0.3s ease-out" }} // 부드러운 멈춤
        >
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
}
