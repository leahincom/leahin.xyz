import type { HeadProps, PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

import DefaultLayout, { DefaultLayoutHead } from "../layouts/DefaultLayout";

export const query = graphql`
  query PagePostTemplateQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

type PagePostTemplateProps = PageProps<Queries.PagePostTemplateQueryQuery>;
const PagePostTemplate: React.FC<PagePostTemplateProps> = ({ data }) => {
  if (!data.mdx) return null;

  return <DefaultLayout>{data.mdx.body}</DefaultLayout>;
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
