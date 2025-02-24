import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import profileImage from "../assets/images/profile.png";
import SendEmail from "./SendEmail";

export default function Title() {
  return (
    <section className="title-wrapper">
      <div className="title-container">
        <div className="name-container">
          <h1 className="title-name">[</h1>
          <h1 className="title-name extra">오세연</h1>
          <h1 className="title-name">]</h1>
        </div>

        <h2>
          <span className="title-strong">발전</span>과{" "}
          <span className="title-strong">조화로움</span>을 추구하는
          <br />
          Frontend Engineer
        </h2>
        <h3 className="mild">
          <span className="semi-title-strong">Typescript</span>를 기반으로
          작업하는 <span className="semi-title-strong">프론트엔드 개발자</span>
          입니다.
          <br />
          <span className="semi-title-strong">적극적인 팀워크</span>와{" "}
          <span className="semi-title-strong">꾸준한 학습</span>을 지향합니다.
        </h3>

        <a href={"#about-me"} className="button-full">
          더 알아보기
          <BsFillCaretRightFill />
        </a>

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
            href="https://www.notion.so/Frontend-162aed31772380b78d59d2f5a25fab69?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNotion />
          </a>

          <SendEmail />
        </div>
      </div>
      {/* <div className="title-image-container">
        <Image
          src={profileImage}
          alt="profile image"
          className="profile-image01"
          draggable={false}
        />
        <Image
          src={profileImage}
          alt="profile image"
          className="profile-image02"
          draggable={false}
        />
      </div> */}
    </section>
  );
}
