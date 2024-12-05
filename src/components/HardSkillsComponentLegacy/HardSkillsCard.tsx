interface HardSkillsCardProps {
  title: string;
  description: string;
  text: string;
}

export default function HardSkillsCard({ title, description, text }: HardSkillsCardProps) {
  return (
    <div className="hard-card-line">
      <div className="hard-card-blur"/>

      <div className="hard-card-container">
        <h3 className="hard-title">{title}</h3>
        <h4 className="hard-description">{description}</h4>
        <p className="hard-text">{text}</p>
      </div>
    </div>
  );
}
