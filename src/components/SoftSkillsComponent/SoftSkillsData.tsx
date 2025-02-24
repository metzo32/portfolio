import { FaRegBookmark } from "react-icons/fa";
import { FaPeopleLine, FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const icons = {
  study: <FaRegBookmark className="skill-icons" />,
  teamwork: <FaPeopleLine className="skill-icons" />,
  active: <FaArrowRight className="skill-icons" />,
  time: <MdAccessTime className="skill-icons" />,
};

const SoftSkillData = [
  {
    image: icons.study,
    title: "꾸준한 학습",
    text: "이해되지 않는 개념은 다양한 방식으로 접근하며 끝까지 파고듭니다. 새로운 라이브러리나 툴을 익히는 데에 흥미가 많고, 적극적으로 실제 활용하려 합니다."
  },
  {
    image: icons.teamwork,
    title: "팀원과의 소통",
    text: "남녀노소 누구와도 금세 친해지는 경향이 있습니다. 유연한 분위기를 만들어 편안한 협업 분위기를 극대화하고, 적극적으로 소통하여 시너지를 높이는 것을 중요하게 생각합니다."
  },
  {
    image: icons.active,
    title: "능동적인 태도",
    text: "주어진 일에 정성껏 임하며, 피드백을 겸허히 받아들여 성장의 기회로 삼습니다. 더 나은 방법을 스스로 고민하고 행동에 옮기는 것을 큰 가치로 삼습니다."
  },
  {
    image: icons.time,
    title: "효율적인 시간 관리",
    text: "시간 약속을 철저히 지키며, 우선순위를 명확하게 정해 중요한 일부터 효과적으로 처리합니다. 제한된 시간 내 최적의 방법을 고민하며 계획적으로 일합니다."
  },
];


export default SoftSkillData;
