import Link from "next/link";
import classes from "./MainHeader.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/assets/Color logo - no background.svg";

import { Fragment, useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";
import SubscribeButton from "../UI/SubscribeButton";

const MainHeader = ({ currentRoute }: { currentRoute: string }) => {
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const currentRoute = router.pathname;

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const toolsClassname = currentRoute === "/tools" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  useEffect(() => {
    setShowMobileMenu(false);
  }, [currentRoute]);

  return (
    <Fragment>
      <header className={`${classes.header}`}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <Link href="/">
              
                <Image src={Logo} alt="EdgeInMind" layout="fill" />
              
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/"
                className={homeClassname}>Home
              </Link>
            </li>
            <li>
              <Link href="/blog"
                 className={blogClassname}>Blog
              </Link>
            </li>
            <li>
              <Link href="/tools"
                className={toolsClassname}>Tools
              </Link>
            </li>
            <li>
              <Link href="/about"
                className={aboutClassname}>About
              </Link>
            </li>
            <li>
              <Link href="/contact"
              className={contactClassname}>Contact
              </Link>
            </li>
          </ul>
          <div className={classes.actionContainer}>
            <SubscribeButton />
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
