import React from "react";
import RiskOnTrade from "./RiskOnTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk On Trade Calculator | EDGEINMIND",
  description:
    "Risk On Trade Calculator, calculates how much money you should risk on each trade, based on the account size and the percentage of the account you are willing to risk",
};

export default function page() {
  return <RiskOnTrade />;
}
