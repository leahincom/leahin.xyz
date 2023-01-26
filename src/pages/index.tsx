import type { HeadProps, PageProps } from "gatsby";
import { graphql } from "gatsby";
import * as React from "react";

import PostCard from "../components/PostCard";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import DefaultLayout, { DefaultLayoutHead } from "../layouts/DefaultLayout";
import { styled } from "../styles/stitches.config";
import slugify from "../utils/slugify";

export const query = graphql`
  query IndexPageQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          category
          date
        }
        body
      }
    }
  }
`;

type IndexPageProps = PageProps<Queries.IndexPageQueryQuery>;
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <DefaultLayout>
      <Container>
        {data.allMdx.nodes.map((post) => (
          <PostCard
            slug={slugify(post.frontmatter!.category, post.frontmatter!.title)}
            title={post.frontmatter!.title}
            category={post.frontmatter!.category}
            summary={post.body ?? ""}
          >
            {post.body}
          </PostCard>
        ))}
      </Container>
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

const Container = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",

  "@md": {
    gridTemplateColumns: "1fr 1fr",
  },
});
