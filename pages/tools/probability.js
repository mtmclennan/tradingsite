import { Fragment } from "react";
import TabNav from "../../components/UI/calculator/TabNav";
import Hero from "../../components/UI/calculator/hero";
import PropabilityCalContainer from "../../components/tools/PropablityCalContainer";

const Probability = () => {
  return (
    <Fragment>
      <Hero />
      <PropabilityCalContainer title="Probability Calculator" />
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
