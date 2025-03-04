"use client";

import { BsFillCaretRightFill } from "react-icons/bs";

export default function MoreButton() {
  const handleClick = () => {
    window.scrollBy({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <button className="button-full" onClick={handleClick}>
      더 알아보기
      <BsFillCaretRightFill />
    </button>
  );
}
