import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCal from "../../components/tools/calculators/TradeSizeCal";
import Hero from "../../components/UI/calculator/Hero";

const TradeSizeCalculator = () => {
  return (
    <Fragment>
      <Head>
        <title>Trade Order Calculator</title>
        <meta
          name="description"
          content="Trade Order Calculator, this tool is a quick way to calculate your braket order prices, number of shares and capital requirement"
        />
      </Head>
      <Hero title="Trade Size Calculator" />
      <TradeSizeCal />
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
export default TradeSizeCalculator;
