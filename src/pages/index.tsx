import type { HeadProps, PageProps } from "gatsby";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import { useSiteMetadata } from "../hooks/useSiteMetadata";
import DefaultLayout, { DefaultLayoutHead } from "../layouts/DefaultLayout";

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery<Queries.IndexPageQuery>(graphql`
    query IndexPage {
      allMongodbBlogPosts {
        edges {
          node {
            summary
          }
        }
      }
    }
  `);

  return (
    <DefaultLayout>
      {data.allMongodbBlogPosts.edges[0]?.node.summary}
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head = ({ location }: HeadProps) => {
  const siteMetadata = useSiteMetadata();

  if (!siteMetadata) return null;

  return (
    <DefaultLayoutHead
      location={location}
      title={siteMetadata.title! ?? ""}
      description={siteMetadata.description! ?? ""}
    />
  );
};
