import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import PropabilityCalContainer from "../../components/tools/calculators/PropablityCalContainer";
import CalculatorHeading from "../../components/UI/calculator/CalulatorHeading";
import BetaTest from "../../components/UI/calculator/BetaTest";

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
export default Probability;
