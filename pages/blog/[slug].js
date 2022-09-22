import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-content";
import { getAllPosts, getBySlug } from "../../lib/post-utils";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.description} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = await getBySlug(slug);

  return {
    props: {
      post: postData.data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  console.log(posts.data[0].slug);
  const slugs = posts.data.map((post) => post.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
