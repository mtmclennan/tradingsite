import { Fragment } from "react";
import Image from "next/image";
import logo from "../public/assets/BlogNameLogo.png";

const HomePage = () => {
  return (
    <Fragment>
      <section className="hero">
        <div className="hero-title">
          <p>Welcome To</p>
          <Image src={logo} alt="BrandName" />
          <p>There Is Great Content Here For You</p>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
