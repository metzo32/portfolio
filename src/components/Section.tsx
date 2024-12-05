import { ReactNode, forwardRef } from "react";

interface SectionProps {
  children?: ReactNode;
  title: string;
  num: string;
  text: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, title, num, text }, ref) => {
    return (
      <section className="section-wrapper" ref={ref}>
        <div className="section-title-container">
          <h2>{title}</h2>
          <div className="section-semi-title">
            <span className="text-tertiary mr-1">{num}</span>
            <p>/ {title}</p>
          </div>
        </div>
        <span className="line">
          <span className="line-blur" />
        </span>
        <p className="w-3/4 mb-28">
          {text}
        </p>
        <div className="flex justify-between items-center">{children}</div>
      </section>
    );
  }
);

export default Section;
