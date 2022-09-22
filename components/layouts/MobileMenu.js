import Link from "next/link";
import classes from "./MobileMenu.module.css";
import { useEffect, useState } from "react";

const MobileMenu = (props) => {
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
            <a className={props.homeClassname}>Home</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/blog">
            <a className={props.blogClassname}>Blog</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/about">
            <a className={props.aboutClassname}>About</a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="/contact">
            <a className={props.contactClassname}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
