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
    setIsSelected(true);
  };

  const softSentence = text
    .split(".")
    .map((sen) => sen.trim())
    .filter((sen) => sen.length > 0);

  return (
    <>
      <div
        className={`soft-card-container-wide ${isSelected ? "" : "deactive"}`}
        onMouseEnter={handleHover}
      >
        <div className="soft-card-box">
          <h6 className="w-full">{num}</h6>
          <div className="soft-card-content">
            <div className={`soft-icon-box ${isSelected ? "active" : ""}`}>
              {image}
            </div>
            <h5 className={`soft-card-title ${isSelected ? "" : "invisible"}`}>
              {title}
            </h5>
            <div className="flex flex-col gap-3">
              {softSentence.map((sentence) => (
                <div
                  key={sentence}
                  className={`flex gap-3 items-center ${
                    isSelected ? "" : "invisible"
                  }`}
                >
                  <span className="min-w-[5px] w-[5px] h-[5px] rounded-full bg-primary dark:bg-white" />
                  <p className={` ${isSelected ? "" : "invisible"}`}>
                    {sentence}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className={`card-deact ${isSelected ? "" : "card-deactive"}`} />
      </div>

      <div
      className={`soft-card-container-small`}
      onMouseEnter={handleHover}
    >
      <div className="soft-card-box">
        <h6 className="w-full">{num}</h6>
        <div className="soft-card-content">
          <div className={`soft-icon-box active`}>
            {image}
          </div>
          <h5 className={`soft-card-title`}>
            {title}
          </h5>
          <div className="flex flex-col gap-3">
            {softSentence.map((sentence) => (
              <div
                key={sentence}
                className={`flex gap-3 items-center`}
              >
                <span className="min-w-[5px] w-[5px] h-[5px] rounded-full bg-primary dark:bg-white" />
                <p>
                  {sentence}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className={`card-deact`} />
    </div>
    </>
  );
}
