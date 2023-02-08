import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./FeaturedPost.module.scss";
import useRemark from "../../hooks/use-remark";
import { Post } from "../../types/interfaces";

type FeaturedPostProps = {
  featuredPost: Post;
  formatDate: (date: string) => string;
};

const FeaturedPost = ({ featuredPost, formatDate }: FeaturedPostProps) => {
  const { convertMd, postHtml } = useRemark();

  useEffect(() => {
    convertMd(featuredPost.postBody.slice(0, 500));
  }, []);

  return (
    <section className={classes.container}>
      <Link href={`/blog/${featuredPost.slug}`}>
        <a>
          <h1 className={classes.title}>{featuredPost.title}</h1>
        </a>
      </Link>
      <Image
        src={featuredPost.featuredImage}
        alt={featuredPost.photoCaption}
        width={1000}
        height={500}
      />
      <span>{`By: ${featuredPost.author}`}</span>
      <span>{`Last Modified ${formatDate(featuredPost.dateModified)}`}</span>
      <div className={classes.body}>
        {postHtml && <div dangerouslySetInnerHTML={postHtml} />}
      </div>
      <Link href={`/blog/${featuredPost.slug}`}>
        <button>Read More</button>
      </Link>
    </section>
  );
};

export default FeaturedPost;
