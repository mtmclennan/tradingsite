import React from "react";
import { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About | EDGEINMIND",
  description:
    "EdgeInMind is the ultimate destination for traders and investors seeking market insights and advanced trading tools. Explore expert analysis, technical strategies, and trading psychology to elevate your performance and stay ahead. Suitable for beginners and seasoned pros alike.",
};

const page = () => {
  return <About />;
};

export default page;
