import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  sectionData: { title: string }[];
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

export default function Navbar({ sectionRefs, sectionData }: NavbarProps) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {windowWidth > 768 ? (
        <nav className="nav-menu-wrapper">
          <ul className="nav-menu-container">
            {sectionData.map((data, index) => (
              <li key={index}>
                <button
                  className="button-light"
                  onClick={() => scrollToSection(index)}
                >
                  {data.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <>
          <button className="menu-button" onClick={handleMenuOpen}>
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
          {isOpen ? (
            <div className="back-cover fixed top-0 left-0 z-40 w-screen h-screen bg-shadow bg-opacity-50">
            <ul className="nav-menu-container col">
              {sectionData.map((data, index) => (
                <li key={index}>
                  <button
                    className="button-side"
                    onClick={() => scrollToSection(index)}
                  >
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
