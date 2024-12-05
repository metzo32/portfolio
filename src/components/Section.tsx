import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  title: string;
  num: string;
  text: string;
}

export default function Section({ children, title, num, text }: SectionProps) {
  return (
    <section className="section-wrapper">
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
