import { Fragment } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import logo from "../public/assets/ColorEMLargelogo-nobackground.png";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Home | EDGEINMIND</title>
        <meta
          name="description"
          content="EdgeInMind: Your gateway to gaining an upper hand in the market. Harness the power of mindset, refine your approach, and achieve trading excellence."
        />
      </Head>
      <div className="hero__container">
        <section className="hero">
          <div className="hero-title">
            <h3>Hello Traders!</h3>
            <h2>Looking an Edge in the Market?</h2>
            <div className="hero__button-container">
              <button onClick={() => router.push("/blog")}>Blog</button>
              <button onClick={() => router.push("/tools")}>Tools</button>
            </div>
          </div>
          <div className="hero-logo">
            <div className="hero-logo__image-container">
              <Image src={logo} alt="EdgeInMind" width={600} height={350} />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default HomePage;
