import Image from "next/image";
import SkillsButton from "./SkillsButton";
import { FaGithub } from "react-icons/fa";
import DeployedButton from "../DeployedButton";

interface ProjectCardProps {
  git: string;
  url: string;
  deployed: boolean;
  thumbnail: string;
  title: string;
  description: string;
  text: string;
  skills: string[];
}

export default function ProjectCard({
  git,
  url,
  deployed,
  thumbnail,
  title,
  description,
  text,
  skills,
}: ProjectCardProps) {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <a
          className="project-image-container relative group"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={thumbnail}
            alt={title}
            className="project-img"
            width={256}
            height={144}
            // placeholder="blur"
            // blurDataURL={thumbnail}
          />
          <div className="project-img-overlay">
            <span className="text-white text-lg">자세히 보기</span>
          </div>
        </a>

        <div className="project-text-container">
          <div className="project-text-box">
            <div className="project-title-box">
              <h2>{title}</h2>
              {deployed && <DeployedButton />}
            </div>
            <h3 className="project-description">{description}</h3>
            <p>{text}</p>
          </div>

          <a href={git} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icons" />
          </a>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillsButton key={index} text={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
