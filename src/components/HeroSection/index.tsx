import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ElegantHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 主標淡入
      gsap.from(".heroTitle", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".heroSubtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      // Glow Scroll 動態
      gsap.to(glowRef.current, {
        y: 250,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Grid Scroll 反向位移
      gsap.to(gridRef.current, {
        y: -120,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 微粒子
      gsap.to(".particle", {
        y: -20,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div ref={gridRef} className={styles.grid}></div>
      <div ref={glowRef} className={styles.glow}></div>

      {/* 粒子 */}
      <div className={`${styles.particle} particle`} />
      <div className={`${styles.particle} particle`} />
      <div className={`${styles.particle} particle`} />
      <div className={`${styles.particle} particle`} />
      <div className={`${styles.particle} particle`} />

      <div className={styles.content}>
        <h1 className={`heroTitle ${styles.title}`}>Welcome to my blog</h1>

        <p className={`heroSubtitle ${styles.subtitle}`}>
          FRONTEND ENGINEER · REACT · TYPESCRIPT
        </p>
      </div>
    </section>
  );
}
