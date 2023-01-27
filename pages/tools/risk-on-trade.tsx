import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import RiskOnTradeCal from "../../components/tools/calculators/RiskOnTradeCal";
import Hero from "../../components/UI/calculator/hero";

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
      <Hero title="Risk On Trade Calculator" />
      <RiskOnTradeCal />
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
export default RiskOnTrade;
