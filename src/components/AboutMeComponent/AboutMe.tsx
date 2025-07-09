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
          <p className="about-p">
            처음에는 더 나은 사용자 경험 및 성능 향상을 위해{" "}
            <span className="about-span">정성을 다해 꾸준히 연구하는 모습</span>{" "}
            에 매력을 느꼈습니다.
          </p>
          <p className="about-p">
            점차 프론트엔드는 제작자와 사용자, 그리고 서비스를 구성하는 여러
            분야를 <span className="about-span">연결해주는 용매</span> 와 같다고
            생각하게 되었습니다.
          </p>

          <p className="about-p">
            이러한 특성을 살려, 단순히 구현에 그치지 않고 왜 이 구조가
            최선인지에 대해{" "}
            <span className="about-span">논리적으로 설명하고 설득</span> 하며,
            더 나은 해답을 찾기 위해{" "}
            <span className="about-span">끊임없이 소통하는 자세</span> 를 갖춘
            개발자가 되고자 합니다.
          </p>
        </div>
      ),
    },
    {
      title: "가장 추구하는 가치는?",
      content: (
        <div className="about-text-box">
          <p className="about-p">
            주어진 일에 <span className="about-span">책임감</span> 을 가지고,
            주인 의식을 발휘해 능동적으로 업무를 수행합니다.
          </p>
          <p className="about-p">
            팀원과 계속해서 소통하며{" "}
            <span className="about-span">의견의 무게 중심을 맞추고</span> , 더
            나은 방향을 향해 <span className="about-span">조화롭게</span>{" "}
            나아가고자 노력합니다.
          </p>
          <p><span className="about-span">새로운 분야에 대해 흥미</span>{" "}를 쉽게 느끼고, 적극적으로 학습하여 성장하려 합니다.</p>
        </div>
      ),
    },
    {
      title: "나의 강점은?",
      content: (
        <div className="about-text-box">
          <p className="about-p">
            누구와도 잘 어울리고, 전달하고자 하는 바를 말 또는 글로 명확히
            표현하여{" "}
            <span className="about-span">원활한 커뮤니케이션과 팀워크</span> 를
            이룰 수 있습니다.
          </p>
          <p>
            <span className="about-span">꾸준하고 성실한 성격</span> 으로,
            호흡이 긴 일도 비교적 수월하게 해냅니다.
          </p>
          <p className="about-p">
            <span className="about-span">철저한 자기 객관화와 겸손한 자세</span>{" "}
            로 스스로의 부족함을 끊임없이 발견하고, 근면히 개선시킵니다.
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
