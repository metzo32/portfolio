"use client"

import { useState } from "react";
import { useIndexStore } from "../../store/useIndexStore";

import HardSkillsCard from "./HardSkillsCard";
import hardSkillsData from "./HardSkillsData";
import MotionAtOnce from "../Animation/MotionAtOnce";
import SelectionBar from "./SelectionBar";

export default function HardSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    hardSkillsData.length > 0 ? hardSkillsData[0].category : null
  );
  const [showCard, setShowCard] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { selectedIndex, setIndex } = useIndexStore();

  const handleCategoryClick = (category: string, index: number) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setShowCard(true);
      setIndex(index);
    }
  };

  const selectedCards =
    hardSkillsData.find((data) => data.category === selectedCategory)?.cards ||
    [];

  return (
    <div className="hard-wrapper">
      <div className="hard-category-container">
        <SelectionBar />
        <ul className="hard-list-container">
          {hardSkillsData.map((data, index) => (
            <li key={data.category}>
              <button
                 className={`button-list ${
                  selectedIndex === index ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(data.category, index)}
              >
                {data.category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`hard-items-wrapper ${showCard ? "block" : "invisible"}`}>
        <h5 className="mb-2">
          Skill Stack in
          <span className="skills-strong"> [ {selectedCategory} ]</span>
        </h5>

        <div
          key={selectedCategory}
          className={`line-secondary ${selectedCategory ? "line-animate" : ""}`}
        />
        <ul className="flex flex-col gap-5">
          {selectedCards.map((card, index) => (
            <MotionAtOnce
              key={card.title}
              trigger={showCard}
              delay={index * 0.2}
            >
              <div
                key={card.title}
                className={`custom-trans ${
                  hoveredIndex === null
                    ? ""
                    : hoveredIndex === index
                    ? "active"
                    : "deactivate"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <HardSkillsCard
                  category={selectedCategory || ""}
                  logo={card.logo}
                  alt={card.alt}
                  title={card.title}
                  text={card.text}
                  isHovered={hoveredIndex === index ? "active" : ""}
                />
              </div>
            </MotionAtOnce>
          ))}
        </ul>
      </div>
    </div>
  );
}
