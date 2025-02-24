
interface SkillsButtonProps {
    text: string;
}

export default function SkillsButton({ text }: SkillsButtonProps) {
  return (
    <div className="skills-box">
      <p className="skills">{text}</p>
    </div>
  )
}
