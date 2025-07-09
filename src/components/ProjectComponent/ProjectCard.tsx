import Image from "next/image";
import type { ProjectCardProps } from "../types/ProjectCardProps";
import SkillsButton from "./SkillsButton";
import { FaGithub } from "react-icons/fa";
import { DeployedButton, TeamButton } from "../DeployedButton";

export default function ProjectCard({
  git,
  url,
  team,
  deployed,
  thumbnail,
  title,
  description,
  text,
  skills,
}: ProjectCardProps) {
  const sentences = text
    .split("##")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

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
              {team && <TeamButton />}
            </div>
            <h3 className="project-description">{description}</h3>
            {sentences.map((sentence, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="min-w-[5px] w-[5px] h-[5px] bg-primary dark:bg-white rounded-full mt-2 block" />
                <p className="leading-relaxed">{sentence}.</p>
              </div>
            ))}
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
