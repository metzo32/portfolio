import Image, { StaticImageData } from "next/image";

interface HardSkillsCardProps {
  category: string;
  logo: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

export default function HardSkillsCard({
  logo,
  alt,
  title,
  text,
}: HardSkillsCardProps) {
  return (
    <li className="peer flex gap-5 group-hover:opacity-50 hover:!opacity-100 custom-trans hover:scale-[102%]">
      <div className="skill-image-container">
        <Image src={logo} alt={alt} />
      </div>
      <div className="flex flex-col">
        <h6 className="skill-card-title">{title}</h6>
        <p className="skill-card-text">{text}</p>
      </div>
    </li>
  );
}
