import React from "react";
import Link from "next/link";

const cookies = () => {
  return (
    <div className="terms__container">
      <div className="terms__heading">
        <h5>Cookie Policy</h5>
      </div>
      <div className="terms__wrapper">
        <section className="terms">
          <p>Last updated: &nbsp;July 27, 2023</p>
          <p>&nbsp;</p>
          <p>Introduction</p>
          <p>
            Welcome to EdgeInMind.com. This website uses cookies to improve your
            browsing experience and to provide us with valuable information on
            how our website is being used. This Cookie Policy explains what
            cookies are, how we use them, and your choices regarding cookies.
          </p>
          <p>&nbsp;</p>
          <p>What are Cookies?</p>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They help us to recognize your device and remember
            your preferences when you return to our site. Cookies also enable us
            to track your interactions with our website, analyze trends, and
            improve our services.
          </p>
          <p>&nbsp;</p>
          <p>Types of Cookies We Use</p>
          <p>
            a. Essential Cookies: These cookies are necessary for the proper
            functioning of our website. They enable you to navigate our site and
            access its features, such as secure areas and user authentication.
            Without these cookies, certain services on our website may not be
            available to you.
          </p>
          <p>&nbsp;</p>
          <p>
            b. Analytical/Performance Cookies: These cookies allow us to collect
            information about how visitors use our website. We use this data to
            analyze trends, track user behavior, and improve the overall user
            experience. The information collected is anonymous and does not
            identify individual users.
          </p>
          <p>&nbsp;</p>
          <p>
            c. Functional Cookies: Functional cookies enhance your experience on
            our website by remembering your preferences, such as language
            preferences and login details. These cookies help provide you with a
            more personalized experience.
          </p>
          <p>&nbsp;</p>
          <p>
            d. Targeting/Advertising Cookies: We may use these cookies to
            deliver targeted advertising to you based on your interests and
            online activities. These cookies may also help us measure the
            effectiveness of our advertising campaigns.
          </p>
          <p>&nbsp;</p>
          <p>Third-Party Cookies</p>
          <p>
            EdgeInMind.com may use third-party services that place cookies on
            your device. These third-party cookies are subject to their
            respective privacy policies, and we do not have control over their
            use of cookies.
          </p>
          <p>&nbsp;</p>
          <p>Your Consent</p>
          <p>
            By using EdgeInMind.com, you consent to the use of cookies as
            outlined in this Cookie Policy. You can manage your cookie
            preferences through your browser settings. Please note that
            disabling certain cookies may impact your experience on our website.
          </p>
          <p>&nbsp;</p>
          <p>Opt-Out Options</p>
          <p>
            You can opt-out of specific cookies by adjusting your browser
            settings. You can also use online tools or browser extensions to
            manage your cookie preferences.
          </p>
          <p>&nbsp;</p>
          <p>Changes to this Policy</p>
          <p>
            EdgeInMind reserves the right to update or modify this Cookie Policy
            from time to time. Any changes will be effective immediately upon
            posting on our website. We encourage you to review this policy
            periodically to stay informed about our cookie practices.
          </p>
          <p>&nbsp;</p>
          <p>Contact Us</p>
          <p>
            If you have any questions or concerns regarding our use of cookies
            or this Cookie Policy, please contact us at edgeinmind@gmail.com.
          </p>
          <p>&nbsp;</p>

          <p>
            By using EdgeInMind.com, you acknowledge that you have read and
            understood this Cookie Policy. Last updated July 27. 2023.
          </p>

          <p>&nbsp;</p>

          <h3>Disclaimer:</h3>

          <Link href="/legal/disclaimer">Read Disclaimer</Link>
          <p>&nbsp;</p>

          <h3>Terms and Conditions:</h3>
          <Link href="/legal">Read Terms and Conditions</Link>
          <p>&nbsp;</p>
          <h3>Privacy Policy:</h3>
          <Link href="/legal/privacy-policy">Read Privacy Policy</Link>
          <p>&nbsp;</p>
        </section>
      </div>
    </div>
  );
};

export default cookies;
