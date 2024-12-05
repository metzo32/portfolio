import { useRef } from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import AboutMe from "./AboutMeComponent/AboutMe";
import HardSkills from "./HardSkillsComponent/HardSkills";
import SoftSkills from "./SoftSkillsComponent/SoftSkills";
import Project from "./ProjectComponent/Project";
import Contact from "../components/ContactComponent/Contact";

export default function Content() {
  
  const sectionData = [
    { children: <AboutMe />, title: "About Me", text: "", ref: useRef<HTMLDivElement>(null) },
    { children: <HardSkills />, title: "Hard Skills", text: "", ref: useRef<HTMLDivElement>(null) },
    { children: <SoftSkills />, title: "Soft Skills", text: "", ref: useRef<HTMLDivElement>(null) },
    { children: <Project />, title: "Projects", text: "텍스트 설명", ref: useRef<HTMLDivElement>(null) },
    { children: <Contact />, title: "Contact", text: "텍스트 설명", ref: useRef<HTMLDivElement>(null) },
  ];

  const sectionRefs = sectionData.map((data) => data.ref);


  return (
    <>
      <Navbar sectionData={sectionData} sectionRefs={sectionRefs}/>
      {sectionData.map((data, index) => (
        <Section
          key={index}
          children={data.children}
          num={`0${index + 1}`}
          title={data.title}
          text={data.text}
          ref={data.ref}
        />
      ))}
    </>
  );
}
