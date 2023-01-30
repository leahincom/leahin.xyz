import type { HeadProps, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { rem } from "polished";
import React from "react";

import { PillBadge } from "~/components/common/Badge";
import DefaultLayout, { DefaultLayoutHead } from "~/layouts/DefaultLayout";
import { styled } from "~/styles/stitches.config";

export const query = graphql`
  query PagePostTemplateQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        category
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
        <span>{data.mdx.frontmatter?.date}</span>
        <PillBadge
          key={data.mdx.frontmatter?.category}
          size="medium"
          property="basic"
          variant="fill"
        >
          {data.mdx.frontmatter?.category}
        </PillBadge>
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

const Metadata = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: rem(8),

  "> span:not(:first-of-type)": {
    marginLeft: rem(8),
  },
});

const Body = styled("section", {
  padding: "4rem 0",
});
