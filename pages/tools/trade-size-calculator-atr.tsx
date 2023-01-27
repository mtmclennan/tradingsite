import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCalAtr from "../../components/tools/calculators/TradeSizeCalAtr";
import Hero from "../../components/UI/calculator/hero";

const TradeSizeCalculatorAtr = () => {
  return (
    <Fragment>
      <Head>
        <title>Trade Order Calculator ATR</title>
        <meta
          name="description"
          content="Trade Order Calculator, this tool is a quick way to calculate your braket order prices, number of shares and capital requirement.  This version uses the Average True Range as a stop loss strategy"
        />
      </Head>
      <Hero title="Trade Size Calculator ATR" />
      <TradeSizeCalAtr />
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
export default TradeSizeCalculatorAtr;
