// "use client"

// import { useState, useEffect } from "react";
// import { throttle } from "lodash";


// const CursorFollower = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     // 이벤트 리스너 추가
//     window.addEventListener("mousemove", handleMouseMove);

//     // 클린업 함수로 이벤트 리스너 제거
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);


// useEffect(() => {
//     const handleMouseMove = throttle((e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     }, 16); 
  
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

  
//   return (
//     <div
//       className="cursor"
//       style={{
//         transform: `translate(${position.x - 230}px, ${position.y - 170}px)`,
//       }}
//     />
//   );
// };

// export default CursorFollower;
import React from 'react'

export default function CursorFollower() {
  return (
    <div>
      커서 팔로어
    </div>
  )
}
