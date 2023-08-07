import Image from "next/legacy/image";
import { Fragment, useEffect } from "react";
import useRemark from "../../hooks/use-remark";
import { DateOptions } from "../../types/index.types";
import { Post } from "../../types/interfaces";

type PostContentProps = {
  post: Post;
};

function PostContent({ post }: PostContentProps) {
  const { postHtml, convertMd } = useRemark();

  const formatDate = (date: string) => {
    const options: DateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en", options);
  };

  useEffect(() => {
    convertMd(post.postBody);
  }, []);

  return (
    <Fragment>
      <section className="post__title">
        <h1>{post.title}</h1>
        <div className="post__info">
          {/* <p>By: {post.author}</p> */}
          <p>Last Modified: {formatDate(post.dateModified)}</p>
        </div>
      </section>
      <div className="post__container">
        <div className="post__image-container">
          {post.featuredImage && (
            <Image
              src={post.featuredImage}
              alt={post.photoCaption}
              width={1000}
              height={500}
            />
          )}
        </div>
        <article className="post__body">
          {postHtml && (
            <div
              className="post__body-html"
              dangerouslySetInnerHTML={postHtml}
            />
          )}
        </article>
      </div>
    </Fragment>
  );
}

export default PostContent;
