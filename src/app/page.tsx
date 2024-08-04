import next from "next";
import React from "react";
import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home | EDGEINMIND",
  description:
    "EdgeInMind: Your gateway to gaining an upper hand in the market. Harness the power of mindset, refine your approach, and achieve trading excellence.",
};

const page = () => {
  return <Home />;
};

export default page;
