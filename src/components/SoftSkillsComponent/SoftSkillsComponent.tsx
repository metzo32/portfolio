import SoftSkillsCard from "./SoftSkillsCard";

export default function SoftSkillsComponent() {
  const softSkillData = [
    { image: "이미지1", title: "꾸준한 학습", text: "텍스트1" },
    { image: "이미지2", title: "팀워크와 협력", text: "텍스트2" },
    { image: "이미지3", title: "적극성", text: "텍스트3" },
    { image: "이미지4", title: "시간 관리", text: "텍스트4" },
  ];

  return (
    <>
      {softSkillData.map((data, index) => (
        <SoftSkillsCard
          key={index}
          num={`0${index + 1}`}
          image={data.image}
          title={data.title}
          text={data.text}
        />
      ))}
    </>
  );
}
