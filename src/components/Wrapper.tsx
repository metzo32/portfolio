import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="wrapper">
      <div className="wrapper-blur" />
      {children}
    </div>
  );
}
