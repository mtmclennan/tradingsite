import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/PostContent";
import { getAllPosts, getBySlug } from "../../lib/post-utils";
import { Post } from "../../types/interfaces";

type PostDetailPageProps = {
  post: Post;
};

function PostDetailPage({ post }: PostDetailPageProps) {
  return (
    <Fragment>
      <Head>
        <title>{post ? post.title : ""}</title>
        <meta name="description" content={post ? post.description : ""} />
      </Head>
      {post ? <PostContent post={post} /> : ""}
    </Fragment>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  console.log("slug");
  console.log(slug);
  const postData = await getBySlug(slug);
  console.log("postData");
  console.log(postData);
  return {
    props: {
      post: postData.data,
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.data.map((post: Post) => post.slug);

  console.log("StaticPaths");
  console.log(slugs);

  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostDetailPage;
