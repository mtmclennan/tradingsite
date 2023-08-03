import React, { Fragment } from "react";
import Link from "next/link";
import classes from "./ToolCard.module.scss";
import { useRouter } from "next/router";

interface ToolCardProps {
  link: string;
  title: string;
  description: string;
  //   output: string;
}

const ToolCard = ({ link, title, description }: ToolCardProps) => {
  const router = useRouter();

  const onClickhandler = () => {
    router.push(link);
  };

  return (
    <div onClick={onClickhandler} className={classes.card}>
      <div className={classes.body}>
        <Fragment>
          <h1>{title}</h1>
          <p>{description}</p>
          {/* <h3>Outputs</h3> */}
          {/* <p>{output}</p> */}
          <Link href={link} legacyBehavior>
            <button>Use</button>
          </Link>
        </Fragment>
      </div>
    </div>
  );
};

export default ToolCard;
