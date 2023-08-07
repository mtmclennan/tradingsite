import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-content";
import { getAllPosts, getBySlug } from "../../lib/post-utils";
import { Post } from "../../types/interfaces";

type PostDetailPageProps = {
  post: Post;
};

function PostDetailPage({ post }: PostDetailPageProps) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const postData = await getBySlug(slug);

  return {
    props: {
      post: postData.data,
    },
    revalidate: process.env.REVALIDATE_TIMING
      ? +process.env.REVALIDATE_TIMING
      : 86400,
  };
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.data.map((post: Post) => post.slug);

  return {
    paths: slugs.map((slug: string) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default PostDetailPage;
