import DarkModeButton from "./DarkModeButton";

export default function Header() {


  return (
    <header className="header-wrapper">
      <span>SEYEON.OH</span>
      <nav aria-label="Main navigation" className="w-full flex justify-end">
        <DarkModeButton />
      </nav>
    </header>
  );
}
