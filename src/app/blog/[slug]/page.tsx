import { getBySlug } from "../../../lib/post-utils";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
import PostPage from "./PostPage";

type Props = { params: { slug: string } };

export async function generateMetadata(
  { params }: Props,
  Parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = await getBySlug(slug);

  return {
    title: post.data.title,
    description: post.data.description,
  };
}

const page = async ({ params }: Props) => {
  const post = await getBySlug(params.slug);
  return <PostPage post={post.data} />;
};

export default page;
