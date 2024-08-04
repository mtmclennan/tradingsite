"use client";
import { Fragment, useState } from "react";

import TabNav from "../../../components/UI/calculator/TabNav";
import TradeSizeCal from "../../../components/tools/calculators/TradeSizeCal";
import CalculatorHeading from "../../../components/UI/calculator/CalulatorHeading";
import BetaTest from "../../../components/UI/calculator/BetaTest";

const TradeSizeCalulator = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  return (
    <Fragment>
      <CalculatorHeading title="Trade Order Calculator" />
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
      <TradeSizeCal />
      <BetaTest />
    </Fragment>
  );
};
export default TradeSizeCalulator;
