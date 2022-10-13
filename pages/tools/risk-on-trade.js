import { Fragment } from "react";
import TabNav from "../../components/UI/calculator/TabNav";
import RiskOnTradeCal from "../../components/tools/RiskOnTradeCal";
import Hero from "../../components/UI/calculator/hero";

const RiskOnTrade = () => {
  return (
    <Fragment>
      <Hero />
      <RiskOnTradeCal title="Risk On Trade Calculator" />
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
export default RiskOnTrade;
