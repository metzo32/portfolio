import { ReactNode } from "react";

interface AboutMeDataProps {
  title: string;
  content: ReactNode;
}

export default function AboutMe() {
  const aboutMeData: AboutMeDataProps[] = [
    {
      title: "왜 프론트엔드 개발자가 되고 싶은지?",
      content: (
        <div className="about-text-box">
          <p>
            3D 디자이너로서 참여한 웹 프로젝트의 성공을 맛본 뒤,{" "}
            <span className="about-span">
              인터페이스가 사용자의 경험에 미치는 힘</span>{" "}
            에 대해 배웠습니다.
          </p>
          <p>
            또한 단순히 구현하는 것을 넘어, 왜 이 구조가 최선이며, 어떻게 하는
            것이 더 나은 경험을 줄지에 대해{" "}
            <span className="about-span">논리적이고</span>{" "}
            <span className="about-span">주체적으로 연구하는 모습</span>{" "}이
            매력으로 다가왔습니다.
          </p>
        </div>
      ),
    },
    {
      title: "가장 추구하는 가치는?",
      content: (
        <div className="about-text-box">
          <p>
            프론트엔드는 제작자와 사용자, 그리고 앱을 구성하는 많은 분야를{" "}
            <span className="about-span">한데 묶어주는 용매</span>{" "}와 같다고
            생각합니다.
          </p>
          <p>
            계속해서 <span className="about-span">무게 중심을 맞추고</span>{" "}, 더
            나은 방향을 향해 <span className="about-span">조화롭게</span>{" "}
            구성하고자 노력합니다.
          </p>
        </div>
      ),
    },
    {
      title: "나의 강점은?",
      content: (
        <div className="about-text-box">
          <p>
            겸손한 자세로 스스로의 부족함을 끊임없이 발견하고,{" "}
            <span className="about-span">근면히 다듬어 나가는 것</span>입니다.
          </p>
          <p>
            어제보다 조금 더 균형잡힌 스스로를 발견하며 또 다시 발전할 힘을
            얻습니다.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="about-wrapper">
      {aboutMeData.map((item, index) => (
        <div key={index} className="about-container">
          <h2 className="about-title">{item.title}</h2>
          {item.content}
        </div>
      ))}
    </div>
  );
}
