import SoftSkillsCard from "./SoftSkillsCard";
import SoftSkillData from "./SoftSkillsData";

export default function SoftSkills() {

  return (
    <div className="soft-card-wrapper">
      {SoftSkillData.map((data, index) => (
        <SoftSkillsCard
          key={index}
          num={`0${index + 1}`}
          image={data.image}
          title={data.title}
          text={data.text}
          initialSelected={index === 0}
        />
      ))}
    </div>
  );
}
