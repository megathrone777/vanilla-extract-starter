import { createTheme } from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({
  color: {
    primary: "yellowgreen",
    primary100: "yellow",
  },
});

export { themeClass, vars };
