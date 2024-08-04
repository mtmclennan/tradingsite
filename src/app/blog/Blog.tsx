"use client";
import { Fragment, useEffect, useState } from "react";
import FeaturedPost from "../../components/posts/FeaturedPost";
import Pagination from "../../components/UI/Pagination";
import { Post } from "../../types/interfaces";
import { formatDate } from "../../lib/post-utils";
import PostCard from "../../components/posts/PostCard";
type PostsData = {
  posts: { data: Post[] };
};

// type SetStatePostArr = React.Dispatch<React.SetStateAction<PostsData>>;

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
      setCurrentPosts(
        allPosts.slice(
          indexOfFirstRecord,
          indexOfLastRecord > allPosts.length
            ? allPosts.length
            : indexOfLastRecord
        )
      );
    }
  }, [allPosts, indexOfFirstRecord, indexOfLastRecord]);

  return (
    <Fragment>
      {featuredPost && (
        <FeaturedPost featuredPost={featuredPost} formatDate={formatDate} />
      )}
      <div className="container">
        <div className="title">
          <h1>Latest Articles</h1>
        </div>

        <ul className="list">
          {currentPosts ? (
            currentPosts.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })
          ) : (
            <p>Loading....</p>
          )}
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

export default Blog;
