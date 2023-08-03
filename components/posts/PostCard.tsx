import React from "react";
import Image from "next/image";
import Card from "../UI/Card";
import { Post } from "../../types/interfaces";
import { formatDate } from "../../lib/post-utils";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
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

          <h1 className="post-card__title">{post.title}</h1>

        </Link>
        <p className="post-card__small">By {post.author}</p>
        <p className="post-card__text">{post.description.slice(0, 300)}</p>
        <p className="post-card__small">
          Last Modified: {formatDate(post.dateModified)}
        </p>
        <Link href={`/blog/${post.slug}`} legacyBehavior>
          <button>Read More</button>
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
