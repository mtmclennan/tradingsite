import { Fragment } from "react";
import Hero from "../../components/UI/calculator/hero";
import TabNav from "../../components/UI/calculator/TabNav";
import TradingPlan from "../../components/tools/TradingPlan/TradingPlan";

const TradingPlanCreator = () => {
  return (
    <Fragment>
      <Hero title="Trading Plan Creator" />
      <TradingPlan />
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

export default TradingPlanCreator;
