import { ReactNode } from "react";
// import MotionWrapper from "./SectionMotion";
import Motion from "./Animation/Motion";

interface SectionProps {
  children?: ReactNode;
  title: string;
  num: string;
  ref: React.RefObject<HTMLDivElement>
}

export default function Section({ children, title, num, ref }: SectionProps) {
  return (
     <Motion delay={0.3}>
      <section className="section-wrapper" ref={ref}>
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
    </Motion>
  );
}
