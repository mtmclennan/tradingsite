import Image from "next/image";
import { Fragment, useEffect } from "react";
import useRemark from "../../hooks/use-remark";
import { Post } from "../../types/interfaces";
import { formatDate } from "../../lib/post-utils";

type PostContentProps = {
  post: Post;
};

function PostContent({ post }: PostContentProps) {
  const { postHtml, convertMd } = useRemark();

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
              priority={true}
              alt={post.photoCaption}
              style={{ width: "100%" }}
              sizes="(min-width: 700px) 80vw, 100vw"
              fill
            />
          )}
        </div>
        <article className="post__body">
          {postHtml ? (
            <div
              className="post__body-html"
              dangerouslySetInnerHTML={postHtml}
            />
          ) : (
            ""
          )}
        </article>
      </div>
    </Fragment>
  );
}

export default PostContent;
