import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

type PagePostTemplateProps = PageProps<GatsbyTypes.PagePostTemplateQueryQuery>;
const PagePostTemplate: React.FC<PagePostTemplateProps> = ({ data }) => {
  return <>{data.mdx?.body}</>;
};

export default PagePostTemplate;

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
