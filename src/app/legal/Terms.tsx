"use client";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms__container">
      <div className="terms__heading">
        <h5>Terms and Conditions</h5>
      </div>
      <div className="terms__wrapper">
        <section className="terms">
          <p>
            Welcome to EdgeInMind.com! By accessing and using this website, you
            agree to be bound by these Terms and Conditions. Please read them
            carefully before using our services.
          </p>
          <p>&nbsp;</p>
          <p>Intellectual Property:</p>
          <p>
            All content, including text, graphics, images, logos, and other
            materials on EdgeInMind.com, are the intellectual property of
            EdgeInMind. You may not reproduce, modify, distribute, or republish
            any content from this website without our prior written consent.
          </p>
          <p>&nbsp;</p>
          <p>Use of Website:</p>
          <p>
            You are granted a limited, non-exclusive, and non-transferable
            license to access and use EdgeInMind.com for personal,
            non-commercial purposes only. You agree not to use this website for
            any unlawful or prohibited activities.
          </p>
          <p>&nbsp;</p>
          <p>Disclaimer of Warranties:</p>
          <p>
            EdgeInMind.com and its content are provided &quot;as is&quot;
            without any warranties, express or implied. We do not guarantee the
            accuracy, completeness, or reliability of the information on this
            website. Your use of this website is at your own risk.
          </p>
          <p>&nbsp;</p>
          <p>Limitation of Liability:</p>
          <p>
            EdgeInMind and its team shall not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising
            from your use or inability to use EdgeInMind.com. This includes
            damages for errors, omissions, or delays in content, loss of data,
            or any other losses resulting from the use of this website.
          </p>
          <p>&nbsp;</p>
          <p>Third-Party Content and Links:</p>
          <p>
            EdgeInMind.com may include third-party content, links, or
            advertisements. We do not endorse, control, or assume responsibility
            for any third-party websites or their content. Your interactions
            with third-party websites are subject to their respective terms and
            conditions and privacy policies.
          </p>
          <p>&nbsp;</p>
          <p>Modification of Services:</p>
          <p>
            EdgeInMind reserves the right to modify or discontinue any aspect of
            this website, including its content and services, at any time
            without prior notice.
          </p>
          <p>&nbsp;</p>
          <p>Indemnification:</p>
          <p>
            You agree to indemnify and hold harmless EdgeInMind and its team
            from any claims, losses, damages, liabilities, and expenses arising
            out of your use of this website or violation of these Terms and
            Conditions.
          </p>
          <p>&nbsp;</p>
          <p>Governing Law and Jurisdiction:</p>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of Ontario, Canada. Any dispute arising
            from these terms or your use of EdgeInMind.com shall be subject to
            the exclusive jurisdiction of the courts of Ontario, Canada.
          </p>
          <p>&nbsp;</p>
          <p>Changes to Terms and Conditions:</p>
          <p>
            EdgeInMind reserves the right to update these Terms and Conditions
            from time to time. Any changes will be effective immediately upon
            posting on this website. We encourage you to review these terms
            regularly to stay informed about any modifications.
          </p>
          <p>&nbsp;</p>
          <p>Contact Us:</p>
          <p>
            If you have any questions, concerns, or requests regarding these
            Terms and Conditions, please contact us at edgeinmind@gmail.com.
          </p>
          <p>&nbsp;</p>
          <p></p>

          <h3>Privacy Policy:</h3>

          <Link href="/legal/privacy-policy">Read Privacy Policy</Link>
          <p>&nbsp;</p>

          <h3>Disclaimers:</h3>
          <Link href="/legal/disclaimer">Disclaimer</Link>
          <p>&nbsp;</p>

          <p>
            By using EdgeInMind.com, you acknowledge that you have read,
            understood, and agreed to abide by these Terms, Conditions,
            disclaimers and privacy policy. Last updated July 27, 2023.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
