import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import FeaturedPost from "../../components/posts/FeaturedPost";
import Pagination from "../../components/UI/Pagination";
import { getAllPosts } from "../../lib/post-utils";
import { Post } from "../../types/interfaces";
import { formatDate } from "../../lib/post-utils";
import PostCard from "../../components/posts/PostCard";
type PostsData = {
  posts: { data: Post[] };
};

type SetStatePostArr = React.Dispatch<React.SetStateAction<PostsData>>;

const Blog = ({ posts }: PostsData) => {
  const [recordsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost, setFeaturedPost] = useState<any>();
  const [allPosts, setAllPosts] = useState<any[]>();
  const [currentPosts, setCurrentPosts] = useState<any[]>();

  const sortedBlogPosts = posts.data.sort((a, b) => {
    const dateA = new Date(a.dateModified);
    const dateB = new Date(b.dateModified);
    return +dateB - +dateA;
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const numberPages = Math.ceil((sortedBlogPosts.length - 1) / recordsPerPage);
  useEffect(() => {
    setFeaturedPost(sortedBlogPosts[0]);
    setAllPosts(sortedBlogPosts.slice(1));
  }, [sortedBlogPosts]);

  useEffect(() => {
    if (allPosts) {
      setCurrentPosts(allPosts.slice(indexOfFirstRecord, indexOfLastRecord));
    }
  }, [allPosts, indexOfFirstRecord, indexOfLastRecord]);

  return (
    <Fragment>
      <Head>
        <title>
          Blog | EDGEINMIND: Mastering Stock Market Mindset for Success
        </title>
        <meta
          name="description"
          content="EDGEINMIND: Your gateway to gaining an upper hand in the market. Harness the power of mindset, refine your approach, and achieve trading excellence."
        />
      </Head>
      {featuredPost && (
        <FeaturedPost featuredPost={featuredPost} formatDate={formatDate} />
      )}
      <div className="container">
        <div className="title">
          <h1>Latest Articles</h1>
        </div>

        <ul className="list">
          {currentPosts &&
            currentPosts.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })}
        </ul>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberPages={numberPages}
        />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  // const slugs = posts.map((post) => post.slug);
  // console.log(slugs);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { posts },
    revalidate: process.env.REVALIDATE_TIMING
      ? +process.env.REVALIDATE_TIMING
      : 60,
  };
}

export default Blog;
