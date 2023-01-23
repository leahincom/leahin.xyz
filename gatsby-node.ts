import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const query = await graphql<{ allMdx: { nodes: GatsbyTypes.Mdx[] } }>(`
    query BlogPostQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
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

  const posts = query.data.allMdx.nodes;

  posts.forEach((post, idx) => {
    const prev = idx === 0 ? null : posts[idx - 1];
    const next = idx >= posts.length - 1 ? null : posts[idx + 1];

    createPage({
      path: post.frontmatter?.slug ?? "",
      component: path.resolve("src/templates/post.tsx"),
      context: { id: post.id, slug: post.frontmatter?.slug, prev, next },
    });
  });
};
