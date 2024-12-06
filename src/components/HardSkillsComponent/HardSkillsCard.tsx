interface HardSkillsCardProps {
  category: string;
  logo: string;
  title: string;
  text: string;
}

export default function HardSkillsCard({
  logo,
  title,
  text,
}: HardSkillsCardProps) {
  return (
    <ul className="group">
      <li className="flex mb-5">
        <div className="skill-image-container">
          <img src={logo} alt={logo} />
        </div>
        <div className="flex flex-col">
          <h6 className="group-hover:text-tertiary custom-trans">{title}</h6>
          <p>{text}</p>
        </div>
      </li>
    </ul>
  );
}
