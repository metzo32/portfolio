import { ReactNode } from "react";
import MotionWrapper from "./SectionMotion";

interface SectionProps {
  children?: ReactNode;
  title: string;
  num: string;
  id: string;
}

export default function Section({ children, title, num, id }: SectionProps) {
  return (
    <MotionWrapper>
      <section id={id} className="section-wrapper">
        <div className="section-title-container">
          <h2>{title}</h2>
          <div className="section-semi-title">
            <span className="item-index">{num}</span>
            <p className="hide-smallview">/ {title}</p>
          </div>
        </div>
        <span className="line">
          <span className="line-blur line-animate" />
        </span>
        {children}
      </section>
    </MotionWrapper>
  );
}
