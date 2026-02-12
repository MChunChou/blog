import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // 從 @gsap/react 導入 useGSAP
const size = 100;
export default function Gasp() {
  // const containerRef = useRef(null); // 建立一個 ref 來引用動畫的容器元素

  // useGSAP(
  //   () => {
  //     // 你的 GSAP 動畫程式碼寫在這裡
  //     // 所有在這裡創建的 GSAP 動畫 (to, from, fromTo, timeline 等)
  //     // 都會被 useGSAP 自動管理，在組件卸載時自動清理。

  //     gsap.to(".my-box", {
  //       // 使用 CSS 選擇器 targeting 元素
  //       x: 200, // 向右移動 200 像素
  //       rotation: 360, // 旋轉 360 度
  //       duration: 1, // 動畫持續 1 秒
  //       ease: "power2.out", // 動畫緩動效果
  //     });

  //     gsap.to(".catIcon", {
  //       opacity: 1,
  //       ease: "power1.inOut",
  //       // stagger: {
  //       //   grid: [7, 15],
  //       //   from: "center",
  //       //   amount: 1.5,
  //       // },
  //       stagger: 1,
  //     });
  //     // gsap.staggerTo(".char", 0.5, { opacity: 1, yPercent: 50, }, 0.1);
  //     // 你也可以直接 targeting ref.current
  //     // gsap.to(containerRef.current.querySelector(".another-box"), { opacity: 0, duration: 0.5 });
  //   },
  //   { scope: containerRef }
  // ); // `scope` 參數很重要，它將 CSS 選擇器限制在 `containerRef` 內部

  // return (
  //   // <div ref={containerRef}>
  //   <div className={styles.intro}>
  //     <Hello />
  //     <div className={styles.intro__text}>I'm a Frontend developer</div>
  //     {/* <span className="catIconView">
  //       <CatIcon
  //         className="catIcon catIcon_1"
  //         style={{ opacity: 0, height: size + "px", width: size + "px" }}
  //       />
  //     </span> */}
  //   </div>
  //   // </div>
  // );
  return <div>Gasp</div>;
}
