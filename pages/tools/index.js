import { Fragment } from "react";

import Hero from "../../components/UI/calculator/hero";
import TabNav from "../../components/UI/calculator/TabNav";

const Tools = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Tools;
