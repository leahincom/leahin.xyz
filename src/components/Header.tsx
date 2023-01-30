import { graphql, Link, useStaticQuery } from "gatsby";
import { padding, rem } from "polished";
import React from "react";

import { ReactComponent as LinkedInSvg } from "~/assets/images/linkedin.svg";
import { ReactComponent as LogoSvg } from "~/assets/images/logo.svg";
import { styled } from "~/styles/stitches.config";

type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  const data = useStaticQuery<Queries.HeaderQuery>(graphql`
    query Header {
      github {
        viewer {
          avatarUrl
          url
        }
      }
    }
  `);

  /**
   * @todo
   * StaticImage, GatsbyImage로 변경
   */
  // const image = getImage();

  return (
    <div id="header" className={className}>
      <Container>
        <Link to="/">
          <Logo>HI</Logo>
        </Link>
        <Externals>
          <a href={data.github.viewer.url}>
            <Image>
              <img
                src={data.github.viewer.avatarUrl}
                alt="avatar"
                width={32}
                height={32}
              />
            </Image>
          </a>
          <a href={data.github.viewer.url}>
            <Image>
              <LinkedInSvg />
            </Image>
          </a>
        </Externals>
      </Container>
    </div>
  );
}

const Container = styled("div", {
  ...padding(rem(80), "1rem", 0),
  maxWidth: rem(768),
  paddingBottom: rem(40),
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: rem(8),
});
const Logo = styled(LogoSvg, {});
const Externals = styled("div", {
  display: "grid",
  gap: rem(4),
  gridAutoFlow: "column",
});
const Image = styled("div", {
  width: rem(32),
  height: rem(32),
  overflow: "hidden",
  borderRadius: rem(16),
});
