import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCal from "../../components/tools/calculators/TradeSizeCal";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";

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
      <CalculatorHeading title="Trade Order Calculator" />
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
      <TradeSizeCal />
    </Fragment>
  );
};
export default TradeSizeCalculator;
