import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <section className="contact-hero__section">
        <div className="contact-hero">
          <p>About</p>
          <h1>EdgeInMind</h1>
          <p>Here to help you with your financial goals!</p>
        </div>
      </section>
      <section className="about-content__container">
        <p>
          Here at EdgeInMind our goal is to provide you with the best
          information we can. We care about helping you.
        </p>

        <p>We what to help you with all your financial goals.</p>
        <p>Build wealth, realise your potential.</p>
      </section>
    </Fragment>
  );
};

export default About;
