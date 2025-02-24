"use client";

import { SiGmail } from "react-icons/si";

export default function SendEmail() {
  const handleMailClick = () => {
    const email = atob("c2V5ZW9uLm1ldHpAZ21haWwuY29t"); //Base64로 인코딩
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleMailClick} className="icons">
      <SiGmail />
    </button>
  );
}
