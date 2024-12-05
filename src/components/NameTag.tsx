import { useState, useEffect } from "react";

export default function NameTag() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 200px 이상일 때 나타나고, 다시 올라오면 숨김
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // 이벤트 리스너 클린업
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`origin-left -rotate-90 w-[100px] py-10 sticky bottom-0 left-0 transition-transform -translate-x-[140px] duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-[400%]"
      }`}
    >
      <span className="opacity-50 font-light">SEYEON.OH</span>
    </div>
  );
}
