import Nav_narrowView from "./Nav_narrowView";

interface NavbarProps {
  sectionData: { id: string; title: string }[];
}

export default function Navbar({ sectionData }: NavbarProps) {
  return (
    <>
      <nav className="nav-menu-wrapper">
        <ul className="nav-menu-container">
          {sectionData.map((data, index) => (
            <li key={index} className="nav-button-border">
              <a href={`#${data.id}`} className="button-light">
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Nav_narrowView sectionData={sectionData} />
    </>
  );
}
