import { MDXProvider } from "@mdx-js/react";
import { vars } from "@seed-design/design-token";
import type { GatsbyBrowser, GatsbySSR } from "gatsby";
import { margin, rem } from "polished";
import React from "react";

const basicStyle = {
  ...margin("2rem", 0, rem(8)),
};

// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxprovider
const components = {
  h1: ({ children }: any) => <h1 style={basicStyle}>{children}</h1>,
  h2: ({ children }: any) => <h2 style={basicStyle}>{children}</h2>,
  h3: ({ children }: any) => <h3 style={basicStyle}>{children}</h3>,
  h4: ({ children }: any) => <h4 style={basicStyle}>{children}</h4>,
  hr: () => (
    <hr style={{ border: `1px solid ${vars.$semantic.color.divider1}` }} />
  ),
  code: ({ children }: any) => (
    <span
      style={{
        boxSizing: "border-box",
        display: "inline-block",
        width: "fit-content",
        maxWidth: "100%",
        padding: rem(8),
        backgroundColor: vars.$semantic.color.secondaryLow,
        flexWrap: "wrap",
        overflow: "scroll",
        borderRadius: rem(8),
      }}
    >
      <code style={{ width: "100%" }}>{children}</code>
    </span>
  ),
  p: ({ children }: any) => <p style={basicStyle}>{children}</p>,
  a: ({ children }: any) => (
    <a
      style={{
        textDecoration: "none",
        color: vars.$scale.color.blue700,
      }}
    >
      {children}
    </a>
  ),
};

type WrapRootElement = (GatsbySSR | GatsbyBrowser)["wrapRootElement"];
export const wrapRootElement: WrapRootElement = ({ element }: any) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
