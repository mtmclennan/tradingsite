"use client";
import { Fragment } from "react";
import TabNav from "../../../components/UI/calculator/TabNav";
import PropabilityCalContainer from "../../../components/tools/calculators/PropablityCalContainer";
import CalculatorHeading from "../../../components/UI/calculator/CalulatorHeading";
import BetaTest from "../../../components/UI/calculator/BetaTest";

const EquitCurveSim = () => {
  return (
    <Fragment>
      <CalculatorHeading title="Equity Curve Simulator" />
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
      <PropabilityCalContainer />
      <BetaTest />
    </Fragment>
  );
};
export default EquitCurveSim;
