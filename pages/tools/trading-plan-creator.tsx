import { Fragment } from "react";
import Head from "next/head";
import Hero from "../../components/UI/calculator/Hero";
import TabNav from "../../components/UI/calculator/TabNav";
import TradingPlan from "../../components/tools/TradingPlan/TradingPlan";

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
      <Hero title="Trading Plan Creator" />
      <TradingPlan />
      <TabNav
        tabs={[
          { label: "Trade Size", link: "/tools/trade-size-calculator" },
          { label: "Trade Size ATR", link: "/tools/trade-size-calculator-atr" },
          { label: "Risk On Trade", link: "/tools/risk-on-trade" },
          { label: "Probability", link: "/tools/probability" },
        ]}
      />
    </Fragment>
  );
};

export default TradingPlanCreator;
