import { BsFillCaretRightFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
// import profileImage from "../assets/images/profile_green.png";

export default function Title() {
  const handleMailClick = () => {
    const email = atob("bWV0em8zMjMyQGdtYWlsLmNvbQo");
    window.location.href = `mailto:${email}`;
  };

  const scrollDownHandler = () => {
    window.scrollTo({
      top: window.scrollY + 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="title-wrapper">
      <div className="title-container">
        <div className="name-container">
          <h1 className="title-name">[</h1>
          <h1 className="title-name pt-3">오세연</h1>
          <h1 className="title-name">]</h1>
        </div>

        <h2>
          <span className="title-strong">효율</span>과{" "}
          <span className="title-strong">조화로움</span>을 추구하는
          <br />
          Frontend Engineer
        </h2>
        <h3>
          Typescript를 기반으로 작업하는 프론트엔드 개발자입니다.
          <br />
          적극적인 팀워크와 꾸준한 학습을 지향합니다.
        </h3>

        <button className="button-full" onClick={scrollDownHandler}>
          더 알아보기
          <BsFillCaretRightFill />
        </button>

        <div className="icons-box">
          <a
            className="icons"
            href="https://github.com/metzo32"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="icons"
            href="https://metz.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStickyNote />
          </a>
          <div onClick={handleMailClick} className="icons">
            <IoMailSharp />
          </div>
        </div>
      </div>
      {/* <div className="title-image-container ">
        <img
          src={profileImage}
          alt="profile image"
          className=" mix-blend-lighten"
        />
      </div> */}
    </div>
  );
}
