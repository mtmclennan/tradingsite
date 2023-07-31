import classes from "./Footer.module.scss";
import { useState } from "react";
import Link from "next/link";
import Banner from "../UI/Banner";
import Image from "next/image";
import logo from "../../public/assets/Color EM Large logo - no background.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [closeBanner, setCloseBanner] = useState(true);

  const homeClassname = currentRoute === "/" ? "active" : "non-active";
  const blogClassname = currentRoute === "/blog" ? "active" : "non-active";
  const toolsClassname = currentRoute === "/tools" ? "active" : "non-active";
  const aboutClassname = currentRoute === "/about" ? "active" : "non-active";
  const contactClassname =
    currentRoute === "/contact" ? "active" : "non-active";

  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      {closeBanner && (
        <Banner
          link="/legal/PrivacyPolicy"
          title="This website uses cookies to enhance your browsing experience and provide personalized content. By clicking Accept, you consent to the use of cookies. To learn more about our use of cookies and your options, please read our Cookie Policy."
          setCloseBanner={setCloseBanner}
        />
      )}
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
      <div className={classes.legal}>
        <Link href="/legal/disclaimer">Disclaimer</Link>{" "}
        <Link href="/legal">Terms and Conditions</Link>{" "}
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
      </div>
      <div className={classes.copyright}>
        <p>{`©${year} By EdgeInMind`}</p>
      </div>
    </footer>
  );
};

export default Footer;
