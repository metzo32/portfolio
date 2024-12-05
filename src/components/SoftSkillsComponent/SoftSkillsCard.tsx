import { useState } from "react"

interface SoftSkillsCardProps {
  num: string;
  image: string;
  title: string;
  text: string;
}

export default function SoftSkillsCard({num, image, title, text}: SoftSkillsCardProps) {
    const [isSelected, setIsSelected] = useState(false)

    // const handleClick = () => {
    //     setIsSelected(!isSelected)
    // }

  return (
    <div className="soft-card-container">
        <div className="soft-card-box">
            <h6 className="w-full">{num}</h6>
            <img src={image} alt="" className="w-1/2 aspect-square bg-purple-300 rounded-full"/>
            <h5>{title}</h5>
            <p className="small-p">{text}</p>
            {/* <button onClick={handleClick} className="button-strong">버튼</button> */}
        </div>
        <span className={`card-deact ${isSelected ? "card-active" : ""}`}/>
    </div>
  )
}
