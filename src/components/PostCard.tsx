import { Link } from "gatsby";
import { rem } from "polished";
import type { PropsWithChildren } from "react";
import React from "react";

import { styled } from "../styles/stitches.config";

type PostCardProps = {
  title: string;
  category: string;
  summary: string;
  slug: string;
} & PropsWithChildren;
const PostCard: React.FC<PostCardProps> = ({
  title,
  category,
  summary,
  slug,
}) => {
  return (
    <Link to={slug}>
      <Card>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Body>{summary}</Body>
      </Card>
    </Link>
  );
};

export default PostCard;

const Card = styled("article", {
  padding: "1rem",
});

const Title = styled("h1", {});
const Category = styled("span", {});
const Body = styled("p", {
  maxHeight: rem(80),
  display: "-webkit-box",
  "-webkit-line-clamp": 3,
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
