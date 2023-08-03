import Link from "next/link";
import classes from "./MobileMenu.module.scss";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  homeClassname: string;
  blogClassname: string;
  toolsClassname: string;
  aboutClassname: string;
  contactClassname: string;
  showMenu: boolean;
};

const MobileMenu = ({
  showMenu,
  homeClassname,
  blogClassname,
  toolsClassname,
  aboutClassname,
  contactClassname,
}: MobileMenuProps) => {
  const menuClass = showMenu ? classes.menu : classes.menuHidden;
  return (
    <div className={menuClass}>
      <ul>
        <li className={classes.link}>
          <Link href="/"
            className={homeClassname}>Home
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/blog"
      className={blogClassname}>Blog
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/tools"
      className={toolsClassname}>Tools
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/about"
     className={aboutClassname}>About
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/contact"
            className={contactClassname}>Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
