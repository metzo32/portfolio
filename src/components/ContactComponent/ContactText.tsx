import Motion from "../Animation/Motion";
import { SendEmailButton } from "../SendEmail";

export default function ContactText() {
  return (
    <>
      <div className="contact-ending-box">
        <Motion delay={0.5}>
          <div className="contact-ending-box">
            <p className="contact-ending">처음과 같은 마음으로 </p>
            <p>
              <span className="contact-ending strong">
                함께 일하고 싶은 동료
              </span>{" "}
              이자,{" "}
            </p>
            <p className="contact-ending">
              <span className="contact-ending strong">
                꾸준히 성장하는 개발자
              </span>{" "}
              가 되고 싶습니다.
            </p>
          </div>
        </Motion>
      </div>

      <div className="flex items-center gap-10">
        <Motion delay={0.7}>
          <a
            className="contact-link"
            href="https://github.com/metzo32"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="contact-link"
            href="https://www.notion.so/Frontend-162aed31772380b78d59d2f5a25fab69?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion
          </a>
          <SendEmailButton/>
        </Motion>
      </div>
    </>
  );
}
