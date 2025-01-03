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
    {
      children: <AboutMe />,
      title: "About Me",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      children: <HardSkills />,
      title: "Hard Skills",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      children: <SoftSkills />,
      title: "Soft Skills",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      children: <Project />,
      title: "Projects",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      children: <Contact />,
      title: "Contact",
      ref: useRef<HTMLDivElement>(null),
    },
  ];

  const sectionRefs = sectionData.map((data) => data.ref);

  return (
    <>
      <Navbar sectionData={sectionData} sectionRefs={sectionRefs} />
      {sectionData.map((data, index) => (
        <Section
          key={index}
          children={data.children}
          num={`0${index + 1}`}
          title={data.title}
          ref={data.ref}
        />
      ))}
    </>
  );
}
