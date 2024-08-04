"use client";
import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="terms__container">
      <div className="terms__heading">
        <h5>Privacy Policy</h5>
      </div>
      <div className="terms__wrapper">
        <section className="terms">
          <p>
            At EdgeInMind, the privacy and security of our visitors and users
            are of utmost importance to us. This Privacy Policy outlines how we
            collect, use, and safeguard your personal information when you
            access our website, EdgeInMind.com. By using our website, you agree
            to the terms of this Privacy Policy.
          </p>
          <p>&nbsp;</p>
          <p>Information Collection and Use:</p>
          <p>
            We may collect certain personal information from you, such as your
            name, email address, and other contact details, when you subscribe
            to our newsletter, fill out a contact form, or interact with our
            website in any way. We will use this information solely for the
            purpose of providing you with updates, responding to your inquiries,
            and improving our services.
          </p>
          <p>&nbsp;</p>
          <p>Cookies and Tracking Technologies:</p>
          <p>
            EdgeInMind may use cookies and similar tracking technologies to
            enhance your experience on our website. These technologies help us
            analyze website traffic, personalize content, and understand your
            preferences. You have the option to disable cookies through your
            browser settings, but this may limit certain features of our
            website.
          </p>
          <p>&nbsp;</p>
          <p>Third-Party Services:</p>
          <p>
            We may use third-party services, such as analytics tools and social
            media platforms, to improve our website and interact with users.
            These services may collect information about your interactions with
            EdgeInMind.com, subject to their respective privacy policies.
          </p>
          <p>&nbsp;</p>
          <p>Security:</p>
          <p>
            EdgeInMind implements industry-standard security measures to protect
            your personal information from unauthorized access, disclosure,
            alteration, or destruction. However, no data transmission over the
            internet is entirely secure, and we cannot guarantee the absolute
            security of your data.
          </p>
          <p>&nbsp;</p>
          <p>Third-Party Links:</p>
          <p>
            Our website may contain links to third-party websites that operate
            independently. We are not responsible for the privacy practices or
            content of these external sites. We encourage you to review the
            privacy policies of any third-party websites you visit through our
            links.
          </p>
          <p>&nbsp;</p>
          <p>Children&apos;s Privacy:</p>
          <p>
            EdgeInMind.com is not intended for use by children under the age of
            13. We do not knowingly collect personal information from
            individuals under the age of 13. If we become aware that we have
            unintentionally collected such information, we will promptly delete
            it.
          </p>
          <p>&nbsp;</p>
          <p>Changes to Privacy Policy:</p>
          <p>
            EdgeInMind reserves the right to update this Privacy Policy from
            time to time. Any changes will be effective immediately upon posting
            on our website. We encourage you to review this policy periodically
            to stay informed about how we are protecting your information.
          </p>
          <p>&nbsp;</p>
          <p>Contact Us:</p>
          <p>
            If you have any questions, concerns, or requests regarding your
            privacy and personal information, please contact us at
            edgeinmind@gmail.com.
          </p>
          <p>&nbsp;</p>
          <p></p>
          <p>
            By using EdgeInMind.com, you agree to the terms and conditions of
            this Privacy Policy. Last updated July 27, 2023.
          </p>

          <p>&nbsp;</p>

          <h3>Disclaimer:</h3>

          <Link href="/legal/disclaimer">Read Disclaimer</Link>
          <p>&nbsp;</p>

          <h3>Terms and Conditions:</h3>
          <Link href="/legal">Read Terms and Conditions</Link>
          <p>&nbsp;</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
