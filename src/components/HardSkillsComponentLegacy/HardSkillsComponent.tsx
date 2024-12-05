import HardSkillsCard from "./HardSkillsCard";

export default function HardSkillsComponent() {
  const hardSkillsData = [
    { title: "Language", description: "시간 약속을 잘 지킴으로써 효율적인 협업을 이룹니다.", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime delectus tempore sit eligendi doloribus ipsa, numquam ducimus harum, fugiat." },
    { title: "유저 중심", description: "부제목2", text: "설명설명2" },
    { title: "적응력", description: "부제목3", text: "설명설명3" },
  ];
  return (
    <div className="hard-card-wrapper">
      {hardSkillsData.map((data, index) => (
        <HardSkillsCard
          key={index}
          title={data.title}
          description={data.description}
          text={data.text}
        />
      ))}
    </div>
  );
}
