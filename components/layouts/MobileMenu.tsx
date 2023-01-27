import Link from "next/link";
import classes from "./MobileMenu.module.css";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  homeClassname: string;
  blogClassname: string;
  toolsClassname: string;
  aboutClassname: string;
  contactClassname: string;
};

const MobileMenu = ({
  homeClassname,
  blogClassname,
  toolsClassname,
  aboutClassname,
  contactClassname,
}: MobileMenuProps) => {
  const [menuClass, setMenuClass] = useState(classes.menuHidden);

  console.log(menuClass);
  useEffect(() => {
    setMenuClass(classes.menu);
  }, []);

  return (
    <div className={menuClass}>
      <ul>
        <li className={classes.link}>
          <Link href="/">
            <a className={homeClassname}>Home</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/blog">
            <a className={blogClassname}>Blog</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/tools">
            <a className={toolsClassname}>Tools</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/about">
            <a className={aboutClassname}>About</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/contact">
            <a className={contactClassname}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
