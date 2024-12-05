import { useState } from "react";


export default function Header() {
  const [isLight, setIsLight] = useState(true)
  const [isEng, setIsEng] = useState(false)

  const handleLightMode = () => {
    setIsLight(!isLight)
    console.log(isLight)
  }

  const handleEngMode = () => {
    setIsEng(!isEng)
    console.log(isEng)
  }

  return (
    <header className="flex justify-between items-center w-full">
      <span>SEYEON.OH</span>
      <nav aria-label="Main navigation" className="w-full flex justify-end">
        <ul className="nav-menu-container">
          <li>
            <button className="button-light" onClick={handleLightMode}>Light</button>
          </li>
          <li>
            <button className="button-light" onClick={handleEngMode}>Eng</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
