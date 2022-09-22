import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import FeaturedPost from "../../components/posts/FeaturedPost";
import Card from "../../components/UI/Card";
import Pagination from "../../components/UI/Pagination";
import { getAllPosts } from "../../lib/post-utils";

const Blog = ({ posts }) => {
  const [recordsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost, setFeaturedPost] = useState();
  const [allPosts, setAllPosts] = useState();
  const [currentPosts, setCurrentPosts] = useState();

  const sortedBlogPosts = posts.data.sort((a, b) => {
    const dateA = new Date(a.dateModified);
    const dateB = new Date(b.dateModified);
    return dateB - dateA;
  });
  console.log(sortedBlogPosts);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const numberPages = Math.ceil((sortedBlogPosts.length - 1) / recordsPerPage);
  useEffect(() => {
    setFeaturedPost(sortedBlogPosts[0]);
    setAllPosts(sortedBlogPosts.slice(1));
  }, [sortedBlogPosts]);

  console.log(featuredPost);
  console.log(allPosts);
  useEffect(() => {
    if (allPosts) {
      setCurrentPosts(allPosts.slice(indexOfFirstRecord, indexOfLastRecord));
    }
  }, [allPosts, indexOfFirstRecord, indexOfLastRecord]);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en", options);
  };

  return (
    <Fragment>
      {featuredPost && (
        <FeaturedPost featuredPost={featuredPost} formatDate={formatDate} />
      )}
      <div className="container">
        <div className="title">
          <span>Welcome To The</span>
          <h1>Latest Articles</h1>
        </div>

        <ul className="list">
          {currentPosts &&
            currentPosts.map((post) => {
              return (
                <Card key={post._id}>
                  {post.featuredImage && (
                    <Image
                      className="post-card__image"
                      src={post.featuredImage}
                      alt={post.photoCaption}
                      width={800}
                      height={400}
                    />
                  )}
                  <div className="post-card__lower">
                    <Link href={`/blog/${post.slug}`}>
                      <a>
                        <h1 className="post-card__title">{post.title}</h1>
                      </a>
                    </Link>
                    <p className="post-card__small">By {post.author}</p>
                    <p>{post.description}</p>
                    <p className="post-card__small">
                      Last Modified: {formatDate(post.dateModified)}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </Card>
              );
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
  };
}

export default Blog;
