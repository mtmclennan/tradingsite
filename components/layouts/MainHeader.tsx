import Link from "next/link";
import classes from "./MainHeader.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

import { Fragment, useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const currentRoute = router.pathname;

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const toolsClassname = currentRoute === "/tools" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  useEffect(() => {
    setShowMobileMenu(false);
  }, [currentRoute]);

  useEffect(() => {
    if (
      currentRoute === "/" ||
      currentRoute === "/about" ||
      currentRoute === "/contact" ||
      currentRoute === "/tools"
    ) {
      document.body.classList.add("body-background");
    } else if (document.body.classList.contains("body-background")) {
      document.body.classList.remove("body-background");
    }
  }, [currentRoute]);

  return (
    <Fragment>
      <header
        className={
          currentRoute === "/" ||
          currentRoute === "/about" ||
          currentRoute === "/contact" ||
          currentRoute === "/tools"
            ? `${classes.header} ${classes.headerClear}`
            : classes.header
        }
      >
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <h1>EdgeInMind</h1>
                {/* <Image height={40} width={214} src={logo} alt="BrandName" /> */}
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/">
                <a className={homeClassname}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={blogClassname}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/tools">
                <a className={toolsClassname}>Tools</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={aboutClassname}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={contactClassname}>Contact</a>
              </Link>
            </li>
          </ul>
          <div className={classes.actionContainer}>
            <button>SUBSCRIBE</button>
          </div>
          <Hamburger
            showMenu={showMobileMenu}
            setShowMenu={setShowMobileMenu}
          />
        </nav>
      </header>

      <MobileMenu
        showMenu={showMobileMenu}
        homeClassname={homeClassname}
        blogClassname={blogClassname}
        aboutClassname={aboutClassname}
        contactClassname={contactClassname}
        toolsClassname={toolsClassname}
      />
    </Fragment>
  );
};

export default MainHeader;
