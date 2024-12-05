import { BsFillCaretRightFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import profileImage from "../assets/images/profile_green.png";

export default function Title() {
  const handleMailClick = () => {
    const email = atob("bWV0em8zMjMyQGdtYWlsLmNvbQo"); 
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="title-wrapper">
      <div className="title-container">
        <div className="name-container">
          <h1 className="title-name">[</h1>
          <h1 className="title-name mt-2 mx-5">오세연</h1>
          <h1 className="title-name">]</h1>
        </div>

        <h2>
          <span className="title-strong">효율</span>과{" "}
          <span className="title-strong">조화로움</span>을 추구하는
          <br />
          Frontend Engineer
        </h2>
        <h3 className="my-12">
          Typescript를 기반으로 작업하는 프론트엔드 개발자입니다.
          <br />
          적극적인 팀워크와 꾸준한 학습을 지향합니다.
        </h3>

        <button className="button-full">
          더 알아보기
          <BsFillCaretRightFill className="ml-2" />
        </button>

        <div className="icons-box">
          <a
            href="https://github.com/metzo32"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="https://metz.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStickyNote className="icons" />
          </a>
          <IoMdMail onClick={handleMailClick} className="icons" />
        </div>
      </div>
      <div className="title-image-container ">
        <img
          src={profileImage}
          alt="profile image"
          className=" mix-blend-lighten"
        />
      </div>
    </div>
  );
}
