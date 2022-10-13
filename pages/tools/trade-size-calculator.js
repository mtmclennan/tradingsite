import { Fragment } from "react";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCal from "../../components/tools/TradeSIzeCal";
import Hero from "../../components/UI/calculator/hero";

const TradeSizeCalculator = () => {
  return (
    <Fragment>
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
