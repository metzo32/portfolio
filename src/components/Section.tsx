import { ReactNode, forwardRef } from "react";

interface SectionProps {
  children?: ReactNode;
  title: string;
  num: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, title, num }, ref) => {
    return (
      <section className="section-wrapper" ref={ref}>
        <div className="section-title-container">
          <h2>{title}</h2>
          <div className="section-semi-title">
            <span className="item-index">{num}</span>
            <p className="hide-smallview">/ {title}</p>
          </div>
        </div>
        <span className="line mb-24">
          <span className="line-blur" />
        </span>
        <div className="flex justify-between items-center">{children}</div>
      </section>
    );
  }
);

export default Section;
