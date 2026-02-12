import { ISourceOptions } from "@tsparticles/engine";

const backgroundColor = "#ECEFF1";
// const color = "#e0e7eb";
const color = "#f1f3f4";
const shadowColor = "#B0BEC5";

const options: ISourceOptions = {
  background: {
    color: {
      value: backgroundColor,
    },
  },
  particles: {
    number: {
      value: 20,
    },
    color: {
      value: color,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.1,
        sync: false,
      },
    },
    size: {
      value: 80,
    },
    move: {
      direction: "none",
      enable: false,
      random: true,
    },
    random: true,
    zIndex: {
      value: 1,
    },
    shadow: {
      enable: true,
      blur: 10,
      color: shadowColor,
    },
  },
};

export default options;
