import { useState } from "react";
import flagEng from "../assets/images/flag_eng.png";
import flagKor from "../assets/images/flag_kor.png";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";

interface FlagProps {
  imageSrc: string;
}

function Flag({ imageSrc }: FlagProps) {
  return (
    <div className="w-8 md:w-10">
      <img src={imageSrc} alt={imageSrc} />
    </div>
  );
}

export default function Header() {
  const [isLight, setIsLight] = useState(true);
  const [isEng, setIsEng] = useState(false);

  const handleLightMode = () => {
    setIsLight(!isLight);
    console.log(isLight);
  };

  const handleLang = () => {
    setIsEng(!isEng);
    console.log(isEng);
  };

  return (
    <header className="header-wrapper">
      <span>SEYEON.OH</span>
      <nav aria-label="Main navigation" className="w-full flex justify-end">
        <ul className="header-menu-container">
          <li className="li-centered">
            <button onClick={handleLightMode} className="w-10 h-10">
              {isLight ? <HiSun/> : <HiMoon/>}
            </button>
          </li>
          <li className="li-centered">
            <button className="" onClick={handleLang}>
              {isEng ? (
                <Flag imageSrc={flagEng} />
              ) : (
                <Flag imageSrc={flagKor} />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
