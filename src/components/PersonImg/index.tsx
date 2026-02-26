import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
// import PIC from "@site/static/img/DemoPic.png";
import PIC from "@site/static/img/image.png";

import styles from "./styles.module.scss";
// import styles from "@site/src/components/PersonImg/styles.module.scss";

console.log(styles);

const PersonImg = () => {
  return (
    <div className={styles.photo}>
      <img src={PIC} alt="" />
    </div>
  );
};

export default PersonImg;
