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
    text: "생소한 개념에 쉽게 흥미를 느끼고, 배우려 노력합니다. 모든 프로젝트마다 새로운 라이브러리나 기술을 적용하고 익혔습니다.",
  },
  {
    image: icons.teamwork,
    title: "팀원과의 소통",
    text: "남녀노소 쉽게 친해지는 경향이 있습니다. 유대감을 바탕으로 개방적인 소통을 이끌어 효과적인 협업 분위기를 조성할 수 있습니다.",
  },
  {
    image: icons.active,
    title: "능동적인 태도",
    text: "홀로 만든 소규모 프로젝트라도 적극적으로 QA를 요청하여 무엇이 더 개선될 수 있을지 찾아냅니다. 이미 푼 문제도 더 효율적인 방법이 없을지 다른 풀이를 찾아보고 적용합니다.",
  },
  {
    image: icons.time,
    title: "효율적인 시간 관리",
    text: "우선순위를 명확히 하여 제한된 시간 내 과제를 처리할 최적의 방법을 고민합니다. 개인 프로젝트를 진행할 때도 데드라인을 직접 정하고, 수행 과정을 꾸준히 기록해 개선 사항을 찾아냅니다.",
  },
];

export default SoftSkillData;
