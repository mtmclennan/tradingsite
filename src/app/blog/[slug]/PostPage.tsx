"use client";

import { Fragment } from "react";
import PostContent from "../../../components/posts/PostContent";
import { Post } from "../../../types/interfaces";

type PostDetailPageProps = {
  post: Post;
};

function PostPage({ post }: PostDetailPageProps) {
  return <Fragment>{post ? <PostContent post={post} /> : ""}</Fragment>;
}

export default PostPage;
