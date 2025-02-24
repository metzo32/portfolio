"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  sectionData: { id: string; title: string }[];
}

export default function Nav_narrowView({ sectionData }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement>,
    index: number
  ) => {
    event.stopPropagation();
    setIsActive(index);
  };

  const handleClickOverlay = () => {
    setIsOpen(false);
  };

  return (
    <nav className="narrow-nav-wrapper">
      <button className={`menu-button`} onClick={handleMenuOpen}>
        {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
      {isOpen ? (
        <div className="nav-overlay" onClick={handleClickOverlay}>
          <ul className="nav-menu-container-col" onClick={(e) => e.stopPropagation()}>
            {sectionData.map((data, index) => (
              <li
                key={index}
                className={`nav-button-side ${
                  isActive === index ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, index)}
              >
                <span className="item-index">{`0${index + 1}`}</span>
                <a href={`#${data.id}`} className="button-light">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
