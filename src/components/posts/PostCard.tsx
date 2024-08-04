import React from "react";
import Image from "next/image";
import Card from "../UI/Card";
import { Post } from "../../types/interfaces";
import { formatDate } from "../../lib/post-utils";
import Link from "next/link";
import { showLastFullWord } from "../../lib/post-utils";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
      {post.featuredImage && (
        <div className="post-card__image">
          <Image
            src={post.featuredImage}
            alt={post.photoCaption}
            quality={70}
            style={{ borderRadius: "5px 5px 0 0 " }}
            sizes="(max-width 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
      )}
      <div className="post-card__lower">
        <Link href={`/blog/${post.slug}`}>
          <h1 className="post-card__title">{post.title}</h1>
        </Link>
        {/* <p className="post-card__small">By {post.author}</p> */}
        <p className="post-card__text">
          {showLastFullWord(post.description, 300)}
        </p>
        <p className="post-card__small">
          Last Modified: {formatDate(post.dateModified)}
        </p>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </Card>
  );
};

export default PostCard;
