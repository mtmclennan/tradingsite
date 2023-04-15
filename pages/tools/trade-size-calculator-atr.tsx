import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCalAtr from "../../components/tools/calculators/TradeSizeCalAtr";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";

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
      <CalculatorHeading title="Trade Order Calculator ATR" />
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
      <TradeSizeCalAtr />
    </Fragment>
  );
};
export default TradeSizeCalculatorAtr;
