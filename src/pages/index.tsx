import type { PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      allMongodbBlogPosts {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  return <main>{data.allMongodbBlogPosts.edges[0]?.node.title}</main>;
};

export default IndexPage;
