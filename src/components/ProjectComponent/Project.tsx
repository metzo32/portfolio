import Motion from "../Animation/Motion";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

export default function Project() {
  return (
    <div className="project-grid">
      {projectData.map((data, index) => (
        <Motion key={index} delay={0.3}>
          <ProjectCard
            git={data.git}
            url={data.url}
            team={data.team}
            deployed={data.deployed}
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.description}
            text={data.text}
            skills={data.skills}
          />
        </Motion>
      ))}
    </div>
  );
}
