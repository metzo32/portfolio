interface NavbarProps {
  sectionData: { title: string }[];
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

export default function Navbar({ sectionRefs, sectionData }: NavbarProps) {
  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-menu-wrapper">
      <ul className="nav-menu-container">
        {sectionData.map((data, index) => (
          <li key={index}>
            <button className="button-light" onClick={() => scrollToSection(index)}>
              {data.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
