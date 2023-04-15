import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import RiskOnTradeCal from "../../components/tools/calculators/RiskOnTradeCal";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";

const RiskOnTrade = () => {
  return (
    <Fragment>
      <Head>
        <title>Risk On Trade Calculator</title>
        <meta
          name="description"
          content="Risk On Trade Calculator, calculates how much money you should risk on each trade, based on the account size and the percentage of the account you are willing to risk"
        />
      </Head>
      <CalculatorHeading title="Risk On Trade Calculator" />
      <TabNav
        tabs={[
          { label: "Trade Order", link: "/tools/trade-size-calculator" },
          {
            label: "Trade Order ATR",
            link: "/tools/trade-size-calculator-atr",
          },
          { label: "Risk On Trade", link: "/tools/risk-on-trade" },
          { label: "Curve Simulator", link: "/tools/probability" },
        ]}
      />
      <RiskOnTradeCal />
    </Fragment>
  );
};
export default RiskOnTrade;
