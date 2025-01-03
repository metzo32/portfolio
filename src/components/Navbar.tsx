import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  sectionData: { title: string }[];
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

export default function Navbar({ sectionRefs, sectionData }: NavbarProps) {
  const { isWide } = useWindowWidth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isOpen) {
      setIsVisible(true);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isOpen]);

  return (
    <>
      {isWide ? (
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
          <button
            className={`menu-button transition-transform duration-100 ${
              isVisible ? "translate-y-0" : "-translate-y-16"
            }`}
            onClick={handleMenuOpen}
          >
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
          {isOpen ? (
            <div className="back-cover">
              <ul className="nav-menu-container col">
                {sectionData.map((data, index) => (
                  <li
                    key={index}
                    className="button-side"
                    onClick={() => scrollToSection(index)}
                  >
                    <span className="item-index">{`0${index + 1}`}</span>
                    {data.title}
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
