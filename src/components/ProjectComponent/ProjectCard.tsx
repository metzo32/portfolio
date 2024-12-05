import SkillsButton from "./SkillsButton";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  text: string;
}


export default function ProjectCard({thumbnail, title, description, text}: ProjectCardProps) {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <img src={thumbnail} alt={thumbnail} className="w-[300px] h-[300px] bg-blue-900" />
        <div className="flex-1 ml-5 flex flex-col justify-between items-start">
          <h2>{title}</h2>
          <h3 className="text-tertiary">{description}</h3>
          <p>
            {text}
          </p>
        </div>
      </div>
      <div className="skills-container">
        <SkillsButton text="javascript" />
        <SkillsButton text="CSS" />
        <SkillsButton text="Typescript" />
        <SkillsButton text="Redux" />
      </div>
    </div>
  );
}
