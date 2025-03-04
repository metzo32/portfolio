"use client";

import { ReactNode, useState } from "react";

interface SoftSkillsCardProps {
  num: string;
  image: ReactNode;
  title: string;
  text: string;
  initialSelected: boolean;
}

export default function SoftSkillsCard({
  num,
  image,
  title,
  text,
  initialSelected,
}: SoftSkillsCardProps) {
  const [isSelected, setIsSelected] = useState(initialSelected);

  const handleHover = () => {
    setIsSelected(true); // 이부분 마우스 액션 말고 화면 진입에 따라 순차적 상태변화 시켜보자.
  };

  return (
    <div
      className={`soft-card-container ${isSelected ? "" : "deactive"}`}
      onMouseEnter={handleHover}
    >
      <div className="soft-card-box">
        <h6 className="w-full">{num}</h6>
        <div className="soft-card-content">
          <div className={`soft-icon-box ${isSelected ? "active" : ""}`}>
            {image}
          </div>
          <h5 className={`soft-card-title ${isSelected ? "" : "invisible"}`}>{title}</h5>
          <div>
            <p className={`text-center ${isSelected ? "" : "invisible"}`}>{text}</p>
          </div>
        </div>
      </div>
      <span className={`card-deact ${isSelected ? "" : "card-deactive"}`} />
    </div>
  );
}
