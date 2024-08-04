import React from "react";
import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact | EDGEINMIND: How Can we Help?",
  description:
    "EdgeInMind is the ultimate destination for traders and invesGet in touch with EdgeInMind for inquiries, support, and expert advice on trading and investing. Reach out to us for assistance with our advanced tools, insights, and resources to enhance your market performance. We're here to help you succeed.",
};

const page = () => {
  return <Contact />;
};

export default page;
