import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import logo from "../public/assets/ColorEMLargelogo-nobackground.png";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About | EDGEINMIND</title>
        <meta name="description" content="About Edgeinmind company" />
      </Head>
      <section className="contact-hero__section">
        <div className="contact-hero">
          <h3>About</h3>
          <div>
            <Image src={logo} alt="EdgeInMind" layout="responsive" />
          </div>
          <p>Here to help you with your financial goals!</p>
        </div>
      </section>
      <section className="about-content__container">
        <p>
          EdgeInMind is the ultimate destination for traders and investors
          looking to gain an edge in the market. We offer a wealth of
          information on technical analysis and trading psychology, as well as a
          range of advanced tools and resources to help you make better
          decisions and improve your performance. Our blog is regularly updated
          with expert insights and analysis, providing you with the latest
          market trends and strategies to help you stay ahead of the curve. From
          beginners to seasoned pros, EdgeInMind has something for everyone
          looking to take their trading to the next level. With our cutting-edge
          tools and expert analysis, you can unlock the full potential of your
          trading and achieve greater success in the market.
        </p>

        <p>Build wealth, realise your potential.</p>
      </section>
    </Fragment>
  );
};

export default About;
