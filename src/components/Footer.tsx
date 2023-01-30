import { vars } from "@seed-design/design-token";
import React from "react";

import { styled } from "~/styles/stitches.config";

export default function Footer() {
  return (
    <div id="footer">
      <Container>@leahincom</Container>
    </div>
  );
}

const Container = styled("footer", {
  borderTop: `1px solid ${vars.$semantic.color.divider1}`,
  padding: "1rem",
  textAlign: "center",
  margin: "0 auto",
});
