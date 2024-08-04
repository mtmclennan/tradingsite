import React from "react";
import TermsAndConditions from "./Terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EDGEINMIND",
  description:
    "Explore EDGEINMIND's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our commitment to security, cookie usage, third-party services, and more. Stay informed about our policies for a secure online experience. Contact us for privacy-related inquiries.",
  robots: { index: false, follow: false },
};

export default function page() {
  return <TermsAndConditions />;
}
