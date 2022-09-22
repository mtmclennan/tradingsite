import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/BlogNameLogoAbove.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Image height={125} width={250} src={logo} alt="BrandName" />
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
        <p>{`©${year} By BrandName`}</p>
      </div>
    </footer>
  );
};

export default Footer;
