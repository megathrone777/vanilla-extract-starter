import { globalKeyframes } from "@vanilla-extract/css";

globalKeyframes("rotate", {
  from: {
    transform: "rotate(0deg)",
  },

  to: {
    transform: "rotate(360deg)",
  },
});
