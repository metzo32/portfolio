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
  { image: icons.study, title: "꾸준한 학습", text: "이해하기 어려운 개념은 다양한 각도로 " },
  { image: icons.teamwork, title: "팀워크와 협력", text: "텍스트2" },
  { image: icons.active, title: "적극성", text: "텍스트3" },
  { image: icons.time, title: "시간 관리", text: "텍스트4" },
];

export default SoftSkillData;
