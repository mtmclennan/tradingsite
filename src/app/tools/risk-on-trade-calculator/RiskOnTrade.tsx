"use client";
import { Fragment } from "react";

import TabNav from "../../../components/UI/calculator/TabNav";
import RiskOnTradeCal from "../../../components/tools/calculators/RiskOnTradeCal";
import CalculatorHeading from "../../../components/UI/calculator/CalulatorHeading";
import BetaTest from "../../../components/UI/calculator/BetaTest";

const RiskOnTrade = () => {
  return (
    <Fragment>
      <CalculatorHeading title="Risk On Trade Calculator" />
      <TabNav
        tabs={[
          { label: "Trade Order", link: "/tools/trade-order-calculator" },
          {
            label: "Trade Order ATR",
            link: "/tools/trade-order-calculator-atr",
          },
          { label: "Risk On Trade", link: "/tools/risk-on-trade-calculator" },
          { label: "Curve Simulator", link: "/tools/equity-curve-simulator" },
        ]}
      />
      <RiskOnTradeCal />
      <BetaTest />
    </Fragment>
  );
};
export default RiskOnTrade;
