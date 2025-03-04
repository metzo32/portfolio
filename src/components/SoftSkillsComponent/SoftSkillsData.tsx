import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPeopleLine, FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const icons = {
  study: <IoCheckmarkSharp className="skill-icons" />,
  teamwork: <FaPeopleLine className="skill-icons" />,
  active: <FaArrowRight className="skill-icons" />,
  time: <MdAccessTime className="skill-icons" />,
};

const SoftSkillData = [
  {
    image: icons.study,
    title: "호기심과 꾸준한 학습",
    text: "생소한 개념에 쉽게 흥미를 느끼고, 다양한 방식으로 접근하며 숙지하려 노력합니다. 모든 프로젝트마다 새로운 라이브러리나 기술을 추가하여 Framer motion, MSW 라이브러리, ",
  },
  {
    image: icons.teamwork,
    title: "팀원과의 소통",
    text: "남녀노소 쉽게 친해지는 경향이 있습니다. 이를 바탕으로 보다 개방된 소통이 이루어지는 분위기를 만들고, 협업을 극대화할 수 있습니다.",
  },
  {
    image: icons.active,
    title: "능동적인 태도",
    text: "더 나은 방법을 스스로 찾아내고 행동에 옮기는 것을 큰 가치로 삼습니다. 많은 QA를 요청하고 피드백을 모아 ",
  },
  {
    image: icons.time,
    title: "효율적인 시간 관리",
    text: "시간 약속을 철저히 지키고, 우선순위를 명확히 하여 제한된 시간 내 과제를 처리할 최적의 방법을 고민합니다. 개인 프로젝트를 진행할 때도",
  },
];

export default SoftSkillData;
