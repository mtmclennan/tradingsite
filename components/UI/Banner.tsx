import Link from "next/link";
import React from "react";
import { SetStateBoolean } from "../../types/index.types";
import classes from "./Banner.module.scss";

interface BannerProps {
  title: string;
  link: string;
  setCloseBanner: SetStateBoolean;
}

const Banner = ({ title, link, setCloseBanner }: BannerProps) => {
  return (
    <div className={classes.container}>
      <p>{title}</p>
      <div className={classes.wrapper}>
        <Link href={link}>Read Policy</Link>
        <button onClick={() => setCloseBanner(false)}>Accept</button>
      </div>
    </div>
  );
};

export default Banner;
