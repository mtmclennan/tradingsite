import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import TradingPlan from "../../components/tools/TradingPlan/TradingPlan";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";

const TradingPlanCreator = () => {
  return (
    <Fragment>
      <Head>
        <title>Trading Plan Creator</title>
        <meta
          name="description"
          content="Trading Plan Creator, this tool helps you defise a trading plan, to help you with consisent profits"
        />
      </Head>
      <CalculatorHeading title="Trading Plan Creator" />
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
      <TradingPlan />
    </Fragment>
  );
};

export default TradingPlanCreator;
