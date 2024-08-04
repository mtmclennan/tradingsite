import React from "react";
import type { Metadata } from "next";

import { getAllPosts } from "../../lib/post-utils";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Blog | EDGEINMIND: Mastering Stock Market Mindset for Success",
  description:
    "EDGEINMIND: Your gateway to gaining an upper hand in the market. Harness the power of mindset, refine your approach, and achieve trading excellence.",
};

const page = async () => {
  const posts = await getAllPosts();
  return <Blog posts={posts} />;
};

export default page;
