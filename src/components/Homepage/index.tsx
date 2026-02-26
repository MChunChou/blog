import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Intro from "./Intro";
import HeroSection from "../HeroSection";

import styles from "./styles.module.css";

export default function Homepage(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={`container ${styles.container}`}>
        <HeroSection />
        {/* <Intro /> */}
      </div>
    </section>
  );
}
