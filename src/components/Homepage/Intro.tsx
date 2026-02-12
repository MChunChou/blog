import React from "react";

import Hello from "./Hello";
import styles from "./styles.module.css";

export default function Intro() {
  return (
    <>
      <Hello />
      <div className={styles.intro}>
        <div className={styles.intro__text}>I'm a Frontend developer</div>
      </div>
    </>
  );
}
