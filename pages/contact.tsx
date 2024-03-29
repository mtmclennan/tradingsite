import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact | EDGEINMIND: How Can we Help?</title>
        <meta name="description" content="Contact page" />
      </Head>

      <section className="contact-hero__section">
        <div className="contact-hero">
          <h3>Contact Us</h3>
          <h1>How Can We Help?</h1>
          <p>
            Do you have questions, comments, or sugestions about content you
            would like us to cover? We would love to hear from you!
          </p>
        </div>
      </section>
      <div className="contact-form__container">
        <ContactForm />
      </div>
    </Fragment>
  );
};

export default Contact;
