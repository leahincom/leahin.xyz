import { vars } from "@seed-design/design-token";
import { padding, rem } from "polished";

import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    lineHeight: "140%",
    fontFamily: "Montserrat",
  },
  body: {
    fontFamily: "Montserrat",
    background: vars.$semantic.color.paperDefault,
    color: vars.$scale.color.gray900,
    textRendering: "optimizeLegibility",
    wordBreak: "break-word",
    WebkitFontSmoothing: "antialiased",
    margin: 0,
  },
  a: {
    color: vars.$scale.color.gray900,
  },
  "#layout": {
    maxWidth: rem(768),
    ...padding(rem(40), "2rem"),
    margin: "0 auto",

    "@md": {
      ...padding(rem(40), "1rem"),
    },
  },
});

export default globalStyles;
