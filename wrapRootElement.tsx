import { MDXProvider } from "@mdx-js/react";
import type { GatsbyBrowser, GatsbySSR } from "gatsby";
import React from "react";

const components = {};

type WrapRootElement = (GatsbySSR | GatsbyBrowser)["wrapRootElement"];
export const wrapRootElement: WrapRootElement = ({ element }: any) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
