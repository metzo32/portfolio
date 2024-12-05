import SkillsButton from "./SkillsButton";

export default function ProjectCard() {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <img src="" alt="" className="w-[300px] h-[300px] bg-blue-900" />
        <div className="flex-1 ml-5 flex flex-col justify-between items-start">
          <h2>프로젝트 제목</h2>
          <h3 className="text-tertiary">프로젝트 설명문</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            recusandae accusamus illum tempore assumenda at pariatur labore,
            dolores voluptatem voluptates, tenetur asperiores.
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
