import { useState } from "react";

import HardSkillsCard from "./HardSkillsCard";
import hardSkillsData from "./HardSkillsData";

export default function HardSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    hardSkillsData.length > 0 ? hardSkillsData[0].category : null
  );
  const [showCard, setShowCard] = useState(true);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (selectedCategory === category) {
      setShowCard(false);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setShowCard(true);
    }
  };

  const selectedCards =
    hardSkillsData.find((data) => data.category === selectedCategory)?.cards ||
    [];

  return (
    <div className="w-full flex justify-center">
      <ul className="h-[200px] flex flex-col justify-between">
        {hardSkillsData.map((data) => (
          <li key={data.category}>
            <button
              className={`button-list ${
                selectedCategory === data.category ? "clicked" : ""
              }`}
              onClick={() => handleCategoryClick(data.category)}
            >
              {data.category}
            </button>
          </li>
        ))}
      </ul>

      <div className={`w-long py-2 ml-16 ${showCard ? "block" : "invisible"}`}>
        <h5 className="mb-2">
          Skill Stack in
          <span className="skills-strong"> [ {selectedCategory} ]</span>
        </h5>

        <div className="line-secondary" />
        {selectedCards.map((card) => (
          <HardSkillsCard
            key={card.title}
            category={selectedCategory || ""}
            logo={card.logo}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
