import type { HeadProps, PageProps } from "gatsby";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import _ from "lodash";
import { rem } from "polished";
import * as React from "react";
import slugify from "slugify";

import { PillBadge } from "../../src/components/common/Badge";
import PostCard from "../components/PostCard";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import DefaultLayout, { DefaultLayoutHead } from "../layouts/DefaultLayout";
import { styled } from "../styles/stitches.config";
import url from "../utils/url";

export const query = graphql`
  query IndexPageQuery {
    allMdx {
      nodes {
        frontmatter {
          published
          title
          category
          date
          tags
        }
        body
      }
    }
  }
`;

type IndexPageProps = PageProps<Queries.IndexPageQueryQuery>;
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<
    string | undefined
  >();

  const categories = _.uniq(
    data.allMdx.nodes.map((node) => node.frontmatter!.category),
  );

  const selectedPosts = React.useMemo(() => {
    return !selectedCategory
      ? data.allMdx.nodes.filter((node) => node.frontmatter!.published)
      : data.allMdx.nodes.filter(
          (node) =>
            node.frontmatter!.published &&
            node.frontmatter!.category === selectedCategory,
        );
  }, [selectedCategory]);

  const handleClick = (category: string) => () => {
    if (category === selectedCategory) setSelectedCategory(undefined);
    else setSelectedCategory(category);
  };

  React.useEffect(() => {
    navigate("/");
  }, []);

  return (
    <DefaultLayout>
      <Navbar>
        {categories.map((category) => (
          <Link key={category} to={`?${slugify(category, { lower: true })}`}>
            <PillBadge
              size="large"
              property="basic"
              variant={category === selectedCategory ? "outline" : "normal"}
              onClick={handleClick(category)}
            >
              {category}
            </PillBadge>
          </Link>
        ))}
      </Navbar>
      <Container>
        {selectedPosts.map((post, idx) => (
          <PostCard
            key={`${post.frontmatter?.category}-${idx}`}
            slug={url(post.frontmatter!.category, post.frontmatter!.title)}
            title={post.frontmatter!.title}
            tags={post.frontmatter!.tags}
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
  gap: "3rem",
  padding: "2rem 0",

  "@md": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const Navbar = styled("div", {
  width: "fit-content",
  display: "grid",
  gap: rem(8),
  gridAutoFlow: "column",
});
