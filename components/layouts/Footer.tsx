import classes from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/Color EM Large logo - no background.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const toolsClassname = currentRoute === "/tools" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Image src={logo} alt="EdgeInMind" layout="responsive" />
      </div>
      <div className={classes.nav}>
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
      </div>
      <div className={classes.copyright}>
        <p>{`©${year} By EdgeInMind`}</p>
      </div>
    </footer>
  );
};

export default Footer;
