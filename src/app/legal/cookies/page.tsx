import React from "react";
import Cookies from "./Cookies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | EDGEINMIND",
  description: "Cookies - How this site uses cookies",
  robots: { index: false, follow: false },
};

export default function page() {
  return <Cookies />;
}
