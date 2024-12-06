import SkillsButton from "./SkillsButton";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  text: string;
  skills: string[];
}

export default function ProjectCard({
  thumbnail,
  title,
  description,
  text,
  skills,
}: ProjectCardProps) {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <div className="project-image-container">
          <img src={thumbnail} alt={thumbnail} />
        </div>
        <div className="project-text-container">
          <h2 className="bottom-gap">{title}</h2>
          <h3 className="text-tertiary bottom-gap">{description}</h3>
          <p>{text}</p>
        </div>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillsButton key={index} text={skill} />
        ))}
      </div>
    </div>
  );
}
