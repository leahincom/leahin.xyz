import { Link } from "gatsby";
import { rem } from "polished";
import type { PropsWithChildren } from "react";
import React from "react";

import { styled } from "~/styles/stitches.config";

import { PillBadge } from "./common/Badge";

type PostCardProps = {
  title: string;
  tags: readonly string[] | null;
  slug: string;
} & PropsWithChildren;
const PostCard: React.FC<PostCardProps> = ({ title, tags, children, slug }) => {
  return (
    <Link to={slug}>
      <Card>
        <Title>{title}</Title>
        {!!tags &&
          tags.map((tag) => (
            <PillBadge
              key={`${slug}-${tag}`}
              size="medium"
              property="basic"
              variant="fill"
            >
              {tag}
            </PillBadge>
          ))}
        <Body>{children}</Body>
      </Card>
    </Link>
  );
};

export default PostCard;

const Card = styled("article", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
});

const Title = styled("h1", {});
const Body = styled("p", {
  maxHeight: rem(80),
  display: "-webkit-box",
  "-webkit-line-clamp": 3,
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
