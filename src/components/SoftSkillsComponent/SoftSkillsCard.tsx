import { useState } from "react"

interface SoftSkillsCardProps {
  num: string;
  image: JSX.Element;
  title: string;
  text: string;
  initialSelected: boolean;
}

export default function SoftSkillsCard({num, image, title, text, initialSelected}: SoftSkillsCardProps) {
    const [isSelected, setIsSelected] = useState(initialSelected)

    const handleClick = () => {
        setIsSelected(!isSelected)
    }

  return (
    <div className={`soft-card-container ${isSelected ? "" : "deactive"}`} onClick={handleClick}>
        <div className="soft-card-box">
            <h6 className="w-full">{num}</h6>
            <div className={`soft-icon-box ${isSelected ? "active" : ""}`}>
            {image}
            </div>
            <h5 className={`${isSelected ? "" : "invisible"}`}>{title}</h5>
            <p className={`small-p ${isSelected ? "" : "invisible"}`}>{text}</p>
        </div>
        <span className={`card-deact ${isSelected ? "" : "card-deactive"}`}/>
    </div>
  )
}
