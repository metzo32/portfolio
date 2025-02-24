// import { useState } from "react";
// import { HiSun } from "react-icons/hi";
// import { HiMoon } from "react-icons/hi2";

export default function Header() {
  // const [isLight, setIsLight] = useState(true);

  // const handleLightMode = () => {
  //   setIsLight(!isLight);
  // };

  return (
    <header className="header-wrapper">
      <span>SEYEON.OH</span>
      <nav aria-label="Main navigation" className="w-full flex justify-end">
        {/* <button
          onClick={handleLightMode}
          className="w-10 h-10 flex justify-center items-center border border-white rounded-full"
        >
          {isLight ? <HiSun /> : <HiMoon />}
        </button> */}
      </nav>
    </header>
  );
}
