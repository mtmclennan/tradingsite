import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import PropabilityCalContainer from "../../components/tools/calculators/PropablityCalContainer";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";

const Probability = () => {
  return (
    <Fragment>
      <Head>
        <title>Equity Curve Simulator</title>
        <meta
          name="description"
          content="Equity curve simulator, simulates the shape of an account based on random distribution of winning and lossing trade.  winning streeks and losing streeks.  With commisions"
        />
      </Head>
      <CalculatorHeading title="Equity Curve Simulator" />
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
      <PropabilityCalContainer />
    </Fragment>
  );
};
export default Probability;
