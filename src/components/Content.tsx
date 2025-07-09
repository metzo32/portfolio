"use client";

import { useRef } from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import AboutMe from "./AboutMeComponent/AboutMe";
import HardSkills from "./HardSkillsComponent/HardSkills";
import SoftSkills from "./SoftSkillsComponent/SoftSkills";
import Project from "./ProjectComponent/Project";
import Contact from "../components/ContactComponent/Contact";

export default function Content() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ] as React.RefObject<HTMLDivElement>[];

  const sectionData = [
    { children: <AboutMe />, title: "About Me", ref: sectionRefs[0] },
    { children: <HardSkills />, title: "Hard Skills", ref: sectionRefs[1] },
    { children: <SoftSkills />, title: "Soft Skills", ref: sectionRefs[2] },
    { children: <Project />, title: "Projects", ref: sectionRefs[3] },
    { children: <Contact />, title: "Contact", ref: sectionRefs[4] },
  ];

  return (
    <>
      <Navbar sectionData={sectionData} sectionRefs={sectionRefs} />
      {sectionData.map((data, index) => (
        <Section
          key={index}
          num={`0${index + 1}`}
          title={data.title}
          ref={data.ref}
        >
          {data.children}
        </Section>
      ))}
    </>
  );
}
