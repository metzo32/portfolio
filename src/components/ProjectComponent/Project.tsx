import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

export default function Project() {
  return (
    <div className="project-grid">
      {projectData.map((data, index) => (
        <ProjectCard
          key={index}
          thumbnail={data.thumbnail}
          title={data.title}
          description={data.description}
          text={data.text}
        />
      ))}
    </div>
  );
}
