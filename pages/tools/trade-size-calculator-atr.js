import { Fragment } from "react";
import TabNav from "../../components/UI/calculator/TabNav";
import TradeSizeCalAtr from "../../components/tools/TradeSizeCalAtr";
import Hero from "../../components/UI/calculator/hero";

const TradeSizeCalculatorAtr = () => {
  return (
    <Fragment>
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
