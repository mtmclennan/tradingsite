import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./FeaturedPost.module.scss";
import useRemark from "../../hooks/use-remark";
import { Post } from "../../types/interfaces";
import { showLastFullWord } from "../../lib/post-utils";

type FeaturedPostProps = {
  featuredPost: Post;
  formatDate: (date: string) => string;
};

const FeaturedPost = ({ featuredPost, formatDate }: FeaturedPostProps) => {
  const { convertMd, postHtml } = useRemark();

  useEffect(() => {
    convertMd(showLastFullWord(featuredPost.postBody, 1200));
  }, []);

  return (
    <section className={classes.container}>
      <Link href={`/blog/${featuredPost.slug}`}>
        <h1 className={classes.title}>{featuredPost.title}</h1>
      </Link>
      <div className={classes.image}>
        <Image
          src={featuredPost.featuredImage}
          alt={featuredPost.photoCaption}
          priority
          quality={70}
          fill
          sizes="(max-width 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={classes.bodyContainer}>
        {/* <span>{`By: ${featuredPost.author}`}</span> */}
        <span>{`Last Modified ${formatDate(featuredPost.dateModified)}`}</span>
        <div className={classes.body}>
          {postHtml && <div dangerouslySetInnerHTML={postHtml} />}
        </div>
        <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
      </div>
    </section>
  );
};

export default FeaturedPost;
