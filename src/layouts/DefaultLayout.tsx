import {
  Facebook,
  HeadSeo,
  OpenGraph,
  TwitterCard,
} from "gatsby-plugin-head-seo/src";
import type { HeadSeoProps } from "gatsby-plugin-head-seo/src/HeadSeo";
import { SocialProfileJsonLd } from "gatsby-plugin-head-seo/src/jsonld";
import type { PropsWithChildren } from "react";
import React from "react";

import logoPath from "~/assets/images/icon.png";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import globalStyles from "~/styles/global";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  globalStyles();

  return (
    <>
      <Header />
      <div id="layout">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;

type DefaultLayoutHeadProps = {
  title?: string;
  description?: string;
  image?: {
    url: URL;
    width: number;
    height: number;
  };
} & Omit<HeadSeoProps, "title" | "description">;
export const DefaultLayoutHead: React.FC<DefaultLayoutHeadProps> = ({
  location,
  title,
  description,
  image,
}) => {
  const facebookAppId = "";
  const twitterSiteHandle = "@handle";

  return (
    <HeadSeo location={location} title={title} description={description}>
      {(props) => [
        <OpenGraph
          key="og"
          og={{
            ...props,
            type: "website",
            ...(image && {
              images: [image],
            }),
          }}
        />,
        <TwitterCard
          key="twittercard"
          card={{
            ...props,
            type: image ? "summary_large_image" : "summary",
            site: twitterSiteHandle,
          }}
        />,
        <Facebook key="facebook" appId={facebookAppId} />,
        <SocialProfileJsonLd
          key="org-jsonld"
          type="Organization"
          name={props.title}
          url={new URL(props.url.origin)}
          logo={
            logoPath.startsWith("http")
              ? new URL(logoPath)
              : new URL(logoPath, props.url)
          }
        />,
      ]}
    </HeadSeo>
  );
};
