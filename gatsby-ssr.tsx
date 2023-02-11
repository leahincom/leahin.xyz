import "./src/styles/normalize.css";

import type { GatsbySSR } from "gatsby";
import React from "react";

import { getCssText } from "./src/styles/stitches.config";

export { wrapPageElement } from "./wrapPageElement";
export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link key="1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin=""
    />,
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />,
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
