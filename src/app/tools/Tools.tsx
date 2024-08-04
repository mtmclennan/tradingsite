"use client";
import { Fragment } from "react";
import Head from "next/head";
import Hero from "../../components/UI/calculator/Hero";
import ToolCard from "../../components/UI/calculator/ToolCard";

const Tools = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Trading Tools/Calculators | EDGEINMIND: Streamline Decisions, Amplify
          Profits
        </title>
        <meta
          name="description"
          content="Empower your trading decisions with EdgeInMind's comprehensive suite of tools and calculators. Streamline your strategies, simplify complex choices, and gain a competitive edge in the markets. Elevate your trading game today."
        />
      </Head>
      <Hero
        title="Calculators & Trading Tools"
        description="EdgeInMind is the ultimate destination for traders and investors looking to gain an edge in the market. We offer a wealth of information on technical analysis and trading psychology, as well as a range of advanced tools and resources to help you make better decisions and improve your performance. Our blog is regularly updated with expert insights and analysis, providing you with the latest market trends and strategies to help you stay ahead of the curve. From beginners to seasoned pros, EdgeInMind has something for everyone looking to take their trading to the next level. With our cutting-edge tools and expert analysis, you can unlock the full potential of your trading and achieve greater success in the market. Sign up now and take your trading to the next level with EdgeInMind!"
      />
      <div className="tool-card__container">
        <ToolCard
          title="Trade Order Calculator"
          link="/tools/trade-order-calculator"
          description="Calculate order entry and exit prices, number of shares and more.  Uses fixed dollar amount for stop loss placement"
        />
        <ToolCard
          title="Trade Order Calculator ATR"
          link="/tools/trade-order-calculator-atr"
          description="Calculate order entry and exit prices, and number of shares.  Uses ATR (average true range) indicator for stop loss placement"
        />
        <ToolCard
          title="Risk On Trade Calculator"
          link="/tools/risk-on-trade-calculator"
          description="Calculates the maximum money amount you should put at risk on one trade"
        />
        <ToolCard
          title="Equity Curve Simulator"
          link="/tools/equity-curve-simulator"
          description="Simulates winning and lossing steaks, plus equity curve and more"
        />
      </div>
    </Fragment>
  );
};

export default Tools;
