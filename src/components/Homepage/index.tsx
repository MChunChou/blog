import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Intro from "./Intro";
import PIC from "@site/static/img/DemoPic.png";

import styles from "./styles.module.css";

export default function Homepage(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={`container ${styles.container}`}>
        <Intro />
        <div className={styles.photo}>
          <img src={PIC} alt="" />
        </div>
      </div>
    </section>
  );
}
