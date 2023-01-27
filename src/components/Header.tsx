import { Link } from "gatsby";
import { padding, rem } from "polished";
import React from "react";

import { ReactComponent as LogoSvg } from "../assets/images/logo.svg";
import { styled } from "../styles/stitches.config";

type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  return (
    <div id="header" className={className}>
      <Container>
        <Link to="/">
          <Logo>HI</Logo>
        </Link>
      </Container>
    </div>
  );
}

const Container = styled("div", {
  ...padding(rem(80), "1rem", 0),
  maxWidth: rem(768),
  paddingBottom: rem(40),
  margin: "0 auto",
});
const Logo = styled(LogoSvg, {});
