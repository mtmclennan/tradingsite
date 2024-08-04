import React from "react";
import EquitCurveSim from "./EquityCurveSim";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDGEINMIND | Equity Curve Simulator",
  description:
    "Equity curve simulator, simulates the shape of an account based on random distribution of winning and lossing trade.  winning streeks and losing streeks.  With commisions",
};

export default function page() {
  return <EquitCurveSim />;
}
