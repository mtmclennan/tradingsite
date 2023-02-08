import { Fragment } from "react";
import Head from "next/head";
import Hero from "../../components/UI/calculator/Hero";
import TabNav from "../../components/UI/calculator/TabNav";
// import Graphic from "../../components/tools/other/Graphic";
// import ChartComponent from "../../components/tools/other/charts";

const Tools = () => {
  return (
    <Fragment>
      <Head>
        <title>Tools</title>
        <meta name="description" content="Tools home" />
      </Head>
      <Hero title="Calculators" />
      <TabNav
        tabs={[
          { label: "Trade Size", link: "/tools/trade-size-calculator" },
          { label: "Trade Size ATR", link: "/tools/trade-size-calculator-atr" },
          { label: "Risk On Trade", link: "/tools/risk-on-trade" },
          { label: "Probability", link: "/tools/probability" },
          {
            label: "Trading Plan Creator",
            link: "/tools/trading-plan-creator",
          },
        ]}
      />
      {/* <ChartComponent /> */}
    </Fragment>
  );
};

export default Tools;
