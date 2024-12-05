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
    <div>
      <ul>
        <li className="flex mb-5">
          <div className="skill-image-container bg-pink-400 mr-5">
            <img src={logo} alt={logo} />
          </div>
          <div className="flex flex-col">
            <h6>{title}</h6>
            <p>{text}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
