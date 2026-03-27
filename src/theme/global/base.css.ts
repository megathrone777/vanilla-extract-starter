import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, #root", {
  minHeight: "100dvh",
  width: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
});

globalStyle(".spinner", {
  animation: "rotate .5s linear infinite",
  height: 40,
  insetInline: 0,
  marginInline: "auto",
  position: "absolute",
  top: "50%",
  transformOrigin: "center",
  width: 40,
});
