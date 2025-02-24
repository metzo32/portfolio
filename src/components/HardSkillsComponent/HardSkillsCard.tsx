import Image, { StaticImageData } from "next/image";

interface HardSkillsCardProps {
  category: string;
  logo: StaticImageData; 
  alt: string;
  title: string;
  text: string;
  isHovered: "active" | "";
}

export default function HardSkillsCard({
  logo,
  alt,
  title,
  text,
  isHovered,
}: HardSkillsCardProps) {
  return (
    <li className="flex group gap-5">
      <div className="skill-image-container">
        <Image src={logo} alt={alt} />
      </div>
      <div className="flex flex-col">
        <h6
          className={`${
            isHovered === "active" ? "text-tertiary custom-trans" : ""
          }`}
        >
          {title}
        </h6>
        <p>{text}</p>
      </div>
    </li>
  );
}
