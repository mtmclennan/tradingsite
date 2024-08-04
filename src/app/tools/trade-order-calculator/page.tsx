import React from "react";
import TradeSizeCalulator from "./TradeSizeCalulator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Order Calculator | EDGEINMIND",
  description:
    "Trade Order Calculator, this tool is a quick way to calculate your braket order prices, number of shares and capital requirement",
};

export default function page() {
  return <TradeSizeCalulator />;
}
