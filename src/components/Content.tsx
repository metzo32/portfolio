import Section from "../components/Section";
import AboutMe from "./AboutMeComponent/AboutMe";
// import HardSkillsComponent from "./HardSkillsComponent/HardSkillsComponent";
import HardSkills from "./HardSkillsComponent/HardSkills";
import SoftSkillsComponent from "./SoftSkillsComponent/SoftSkillsComponent";
import ProjectGrid from "../components/ProjectComponent/ProjectGrid";
import Contact from "../components/ContactComponent/Contact";

export default function Content() {
  const sectionData = [
    {children: <AboutMe />, title: "About Me", text: ""},
    {children: <HardSkills />, title: "Hard Skills", text: ""},
    {children: <SoftSkillsComponent />, title: "Soft Skills", text: ""},
    {children: <ProjectGrid />, title: "Projects", text: "텍스트 설명"},
    {children: <Contact />, title: "Contact", text: "텍스트 설명"},
  ]

  return (
    <>
      {sectionData.map((data, index)=>(
        <Section
        key={index}
        children={data.children}
        num={`0${index+1}`}
        title={data.title}
        text={data.text}
        />
      ))}
    </>
  );
}
