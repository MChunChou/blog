import React, { useId, useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function Hello() {
  const [fontSize, setFontSize] = useState(1);
  const text = "Hello World";
  const splitText = text.split("");

  const [progress, setProgress] = useState(0);
  const vhRef = useRef<number>(
    typeof window !== "undefined" ? window.innerHeight : 800
  );
  const ticking = useRef(false);

  // 參數，可依需求調整
  const maxLetterSpacingPx = 28; // 最大字距
  const fadeStart = 0.55; // 開始淡出/碎片化的位置（0~1）
  const shardMaxDistance = 160; // 最長飛散距離（px）

  useEffect(() => {
    setFontSize(0);

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          const p = Math.max(0, Math.min(1, scrollY / vhRef.current));
          setProgress(p);
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const posLeft = "0";

  return (
    <div
      className={styles.hello_world}
      style={{
        // transform: `rotate(${345 + 15 * progress}deg) translate(-190px, 63px)`,
        // transform: `translate(-190px, 100%)`,
        // transform: `rotate(${345 + 15 * progress}deg) translate(${
        //   -190 + 190 * progress
        // }px, calc( 63px + (100vh - 63px) * ${progress} ))`,
        transform: `translate(${
          posLeft + 190 * progress
        }px, calc( -10vh + (100vh - 10vh) * ${progress} ))`,
        opacity: `${1 - 1 * progress}`,
      }}
    >
      {splitText.map((char, index) => {
        const innerText = char === " " ? "\u00A0\u00A0" : char;
        return (
          <span
            key={useId()}
            style={{
              animationDelay: `${(index % 11) * 0.1}s`,
              filter: `blur(${fontSize + 1.5 * progress}rem)`,
              letterSpacing: `${1 + 4 * progress}rem`,
            }}
          >
            {innerText}
          </span>
        );
      })}
    </div>
  );
}
