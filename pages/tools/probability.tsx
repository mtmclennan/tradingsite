import { Fragment } from "react";
import Head from "next/head";
import TabNav from "../../components/UI/calculator/TabNav";
import Hero from "../../components/UI/calculator/Hero";
import PropabilityCalContainer from "../../components/tools/calculators/PropablityCalContainer";

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
      <Hero title="Equity Curve Simulator" />
      <PropabilityCalContainer />
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
export default Probability;
