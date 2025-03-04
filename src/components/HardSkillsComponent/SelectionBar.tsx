"use client";

import { useIndexStore } from "../../store/useIndexStore";

export default function SelectionBar() {
  const { selectedIndex } = useIndexStore();

  function calculateTrans(index: number): number {
    if (index === 0) return 0;
    if (index === 1) return 153;
    if (index === 2) return 290;
    if (index === 3) return 420;
    return 0; // 기본값
  }

  return (
    <div className="hard-bar-main">
      <div
        className="hard-bar-item-wide"
        style={{
          transform: `translateY(${selectedIndex * 52}px)`,
          transition: "transform 0.3s ease",
        }}
      />

      <div
        className="hard-bar-item-narrow"
        style={{
          transform: `translateX(${calculateTrans(selectedIndex)}px)`,
          transition: "transform 0.3s ease",
        }}
      />
    </div>
  );
}
