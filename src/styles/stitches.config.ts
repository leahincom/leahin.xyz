import { createStitches } from "@stitches/react";
import { em } from "polished";

const stitches = createStitches({
  theme: {
    fonts: {
      Montserrat: "Montserrat",
    },
  },
  // follows Bootstrap's breakpoints practice
  // See https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints
  media: {
    sm: `(min-width: ${em(576)})`,
    md: `(min-width: ${em(768)})`,
    lg: `(min-width: ${em(992)})`,
    xl: `(min-width: ${em(1200)})`,
    xxl: `(min-width: ${em(1400)})`,
  },
});

export const styled = stitches.styled;
export const css = stitches.css;
export const globalCss = stitches.globalCss;
export const keyframes = stitches.keyframes;
export const getCssText = stitches.getCssText;
export const theme = stitches.theme;
export const createTheme = stitches.createTheme;
export const config = stitches.config;
