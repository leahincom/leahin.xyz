import type { PageProps } from "gatsby";
import { Robots } from "gatsby-plugin-head-seo/src";
import React from "react";

import DefaultLayout from "~/layouts/DefaultLayout";
import { styled } from "~/styles/stitches.config";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <Container>페이지를 찾을 수 없어요.</Container>
    </DefaultLayout>
  );
};

export default NotFoundPage;

export const Head = () => <Robots none />;

const Container = styled("main", {
  margin: "auto",
});
