import type { GatsbyNode } from "gatsby";
import path from "path";

import slugify from "./src/utils/url";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    const gql = String.raw;
    createTypes(gql`
      type Mdx implements Node {
        frontmatter: Frontmatter
      }

      enum CategoryEnum {
        ABOUT
        SNACKS
        TECH
      }

      type Frontmatter {
        published: Boolean!
        title: String!
        category: CategoryEnum!
        tags: [String!]
      }
    `);
  };

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const query = await graphql<Queries.BlogPostQueryQuery>(`
    query BlogPostQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            published
            title
            category
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild("post 생성 중 에러가 발생했어요.", query.errors);
  }

  if (!query.data) {
    throw new Error("post 쿼리에 데이터가 담겨오지 않았어요.");
  }

  const posts = query.data.allMdx.nodes.filter(
    (node) => !!node.frontmatter && node.frontmatter.published,
  );

  posts.forEach((post, idx) => {
    const prev = idx === 0 ? null : posts[idx - 1];
    const next = idx >= posts.length - 1 ? null : posts[idx + 1];

    createPage({
      path: slugify(post.frontmatter!.category, post.frontmatter!.title),
      component: path.resolve("src/templates/post.tsx"),
      context: { id: post.id, prev, next },
    });
  });
};
