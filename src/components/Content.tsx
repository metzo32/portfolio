// "use client";

// import { useRef } from "react";
// import Navbar from "./Navbar";
// import Section from "./Section";
// import AboutMe from "./AboutMeComponent/AboutMe";
// import HardSkills from "./HardSkillsComponent/HardSkills";
// import SoftSkills from "./SoftSkillsComponent/SoftSkills";
// import Project from "./ProjectComponent/Project";
// import Contact from "../components/ContactComponent/Contact";

// export default function Content() {
//   const sectionRefs = [
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//   ] as React.RefObject<HTMLDivElement>[];

//   const sectionData = [
//     { children: <AboutMe />, title: "About Me", ref: sectionRefs[0] },
//     { children: <HardSkills />, title: "Hard Skills", ref: sectionRefs[1] },
//     { children: <SoftSkills />, title: "Soft Skills", ref: sectionRefs[2] },
//     { children: <Project />, title: "Projects", ref: sectionRefs[3] },
//     { children: <Contact />, title: "Contact", ref: sectionRefs[4] },
//   ];

//   return (
//     <>
//       <Navbar sectionData={sectionData} sectionRefs={sectionRefs} />
//       {sectionData.map((data, index) => (
//         <Section
//           key={index}
//           num={`0${index + 1}`}
//           title={data.title}
//           ref={data.ref}
//         >
//           {data.children}
//         </Section>
//       ))}
//     </>
//   );
// }

import Section from "./Section";
import AboutMe from "./AboutMeComponent/AboutMe";
import HardSkills from "./HardSkillsComponent/HardSkills";
import SoftSkills from "./SoftSkillsComponent/SoftSkills";
import Project from "./ProjectComponent/Project";
import Contact from "../components/ContactComponent/Contact";
import Navbar from "./Navbar";

export default function Content() {
  const sectionData = [
    { id: "about-me", children: <AboutMe />, title: "About Me" },
    { id: "hard-skills", children: <HardSkills />, title: "Hard Skills" },
    { id: "soft-skills", children: <SoftSkills />, title: "Soft Skills" },
    { id: "projects", children: <Project />, title: "Projects" },
    { id: "contact", children: <Contact />, title: "Contact" },
  ];

  return (
    <>
      <Navbar sectionData={sectionData} />
      {sectionData.map((data, index) => (
        <Section
          key={index}
          id={data.id}
          num={`0${index + 1}`}
          title={data.title}
        >
          {data.children}
        </Section>
      ))}
    </>
  );
}
