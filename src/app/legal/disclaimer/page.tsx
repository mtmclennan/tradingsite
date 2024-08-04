import React from "react";
import Disclaimers from "./Disclaimers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | EDGEINMIND",
  description: "Cookies - How this site uses cookies",
  robots: { index: false, follow: false },
};

export default function page() {
  return <Disclaimers />;
}
