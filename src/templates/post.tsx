import type { HeadProps, PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

import DefaultLayout, { DefaultLayoutHead } from "../layouts/DefaultLayout";
import { styled } from "../styles/stitches.config";

export const query = graphql`
  query PagePostTemplateQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
      }
      body
    }
  }
`;

type PagePostTemplateProps = PageProps<Queries.PagePostTemplateQueryQuery>;
const PagePostTemplate: React.FC<PagePostTemplateProps> = ({
  data,
  children,
}) => {
  if (!data.mdx) return null;

  return (
    <DefaultLayout>
      <PageTitle>{data.mdx.frontmatter?.title}</PageTitle>
      <Metadata>
        <p>{data.mdx.frontmatter?.date}</p>
        <p>
          {data.mdx.frontmatter?.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
      </Metadata>
      <Body>{children}</Body>
    </DefaultLayout>
  );
};

export default PagePostTemplate;

export const Head = ({
  location,
  data,
}: HeadProps<Queries.PagePostTemplateQueryQuery>) => {
  if (!data.mdx) return null;

  return (
    <DefaultLayoutHead
      location={location}
      title={data.mdx.frontmatter?.title ?? ""}
      description={data.mdx.body?.slice(0, 20)}
    />
  );
};

const PageTitle = styled("h1", {
  margin: 0,
});

const Metadata = styled("div", {});

const Body = styled("section", {
  padding: "4rem 0",
});
