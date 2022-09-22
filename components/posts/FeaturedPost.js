import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import classes from "./FeaturedPost.module.css";
import useRemark from "../../hooks/use-remark";

const FeaturedPost = ({ featuredPost, formatDate }) => {
  const { convertMd, postHtml } = useRemark();

  useEffect(() => {
    convertMd(featuredPost.postBody);
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
        alt={featuredPost.photoCation}
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
