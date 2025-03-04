"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  sectionData: { title: string; ref: React.RefObject<HTMLDivElement> }[];
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

export default function Navbar({ sectionData, sectionRefs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
  };

  const handleClickOverlay = () => {
    setIsOpen(false);
  };

  const handleScroll = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤
      block: "start", // 시작 부분이 보이도록 조정
    });
  };

  return (
    <>
      <nav className="nav-menu-wrapper">
        <ul className="nav-menu-container">
          {sectionData.map((data, index) => (
            <li key={index} className="nav-button-border">
              <button
                className="button-light"
                onClick={() => handleScroll(index)}
              >
                {data.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="narrow-nav-wrapper">
        <button
          className={`menu-button ${isOpen && "close"}`}
          onClick={handleMenuOpen}
        >
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
        {isOpen ? (
          <div className="nav-overlay" onClick={handleClickOverlay}>
            <ul
              className="nav-menu-container-col"
              onClick={(e) => e.stopPropagation()}
            >
              {sectionData.map((data, index) => (
                <li
                  key={index}
                  className="nav-button-side"
                  onClick={(e) => handleClick(e)}
                >
                  <span className="item-index">{`0${index + 1}`}</span>
                  <button
                    className="nav-button"
                    onClick={() => handleScroll(index)}
                  >
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}
