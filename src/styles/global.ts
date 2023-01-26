import { vars } from "@seed-design/design-token";
import { rem } from "polished";

import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    lineHeight: "140%",
  },
  body: {
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
    paddingBottom: rem(40),
    margin: "0 auto",
  },
});

export default globalStyles;
