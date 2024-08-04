import React, { Fragment, useEffect, useState } from "react";
import classes from "./ProbabilityCal.module.scss";
import InputField from "../../UI/calculator/InputField";
import PropabilityCal from "./PropabiltyCal";
import useInput from "../../../hooks/use-input";
import { X, CurrencyDollar } from "phosphor-react";

type PropabilityCalContainerProps = {
  onClick?: () => void;
};

const PropabilityCalContainer = ({ onClick }: PropabilityCalContainerProps) => {
  //refactor this to state object or useReducer
  const [wins, setWins] = useState(0);
  const [tradeGraph, setTradeGraph] = useState<any[]>([]);
  const [losses, setLosses] = useState(0);
  const [comissions, setComissions] = useState(0);
  const [winningStreak, setWinningStreak] = useState(0);
  const [losingStreak, setLosingStreak] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [drawDown, setDrawDown] = useState(0);
  const [trades, setTrades] = useState<any[]>([]);

  const iconColor = "#0173fd";

  const stringValiate = (value: string) => value !== "";

  const {
    value: enteredAccountBalance,
    valueChangeHandler: accountBalanceChangeHandler,
    inputBlurHandler: accountBalanceBlurHandler,
    isValid: accountBalanceIsValid,
    hasError: accountBalanceHasError,
    reset: resetAccountBalance,
  } = useInput(stringValiate);

  const {
    value: enteredRiskReward,
    valueChangeHandler: riskRewardChangeHandler,
    inputBlurHandler: riskRewardBlurHandler,
    isValid: riskRewardIsValid,
    hasError: riskRewardHasError,
    reset: resetRiskReward,
  } = useInput(stringValiate);

  const {
    value: enteredWinLoss,
    valueChangeHandler: winLossChangeHandler,
    inputBlurHandler: winLossBlurHandler,
    isValid: winLossIsValid,
    hasError: winLossHasError,
    reset: resetWinLoss,
  } = useInput(stringValiate);

  const {
    value: enteredRisk,
    valueChangeHandler: riskChangeHandler,
    inputBlurHandler: riskBlurHandler,
    isValid: riskIsValid,
    hasError: riskHasError,
    reset: resetRisk,
  } = useInput(stringValiate);
  const {
    value: enteredBreakEven,
    valueChangeHandler: breakEvenChangeHandler,
    inputBlurHandler: breakEvenBlurHandler,
    isValid: breakEvenIsValid,
    hasError: breakEvenHasError,
    reset: resetBreakEven,
  } = useInput(stringValiate);

  const {
    value: enteredComissions,
    valueChangeHandler: comissionsChangeHandler,
    inputBlurHandler: comissionsBlurHandler,
    isValid: comissionsIsValid,
    hasError: comissionsHasError,
    reset: resetComissions,
  } = useInput(stringValiate);

  const {
    value: enteredTotalTrades,
    valueChangeHandler: totalTradesChangeHandler,
    inputBlurHandler: totalTradesBlurHandler,
    isValid: totalTradesIsValid,
    hasError: totalTradesHasError,
    reset: resetTotalTrades,
  } = useInput(stringValiate);

  const fillArray = (
    totatlTrades: number,
    WLRatio: number,
    Risk: number,
    RiskReward: number
  ) => {
    const wins = Math.round(totatlTrades * (WLRatio / 100));
    const losses = totatlTrades - wins;
    const winnings = +Risk * +RiskReward - +enteredComissions;
    const loseings = -Math.abs(+enteredRisk) - +enteredComissions;

    const winsArray = Array(wins).fill(winnings);

    const loseArray = Array(losses).fill(loseings);

    const arr = [...winsArray, ...loseArray];

    let tradesArray = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return tradesArray;
  };

  const comissionsCal = (comissions: number, numTrades: number) => {
    return comissions * numTrades * 2;
  };

  const drawDownCal = (comissions: number, streak: number, risk: number) => {
    const comissions1 = comissionsCal(comissions, streak);
    const losses = Number(risk * losingStreak);
    return losses + +comissions1;
  };

  // useEffect(() => {
  //   const profit = wins * +enteredRisk * +enteredRiskReward;
  //   const lossess = losses * +enteredRisk;
  //   const total = +profit - +lossess - +comissions;
  // }, [
  //   comissions,
  //   wins,
  //   losses,
  //   enteredRisk,
  //   enteredRiskReward,
  //   enteredAccountBalance,
  //   tradeGraph,
  // ]);

  useEffect(() => {
    let countLosses = 0;
    let countWinnings = 0;
    let winStreak = 0;
    let loseStreak = 0;
    let accountBalance = +enteredAccountBalance;

    setComissions(comissionsCal(+enteredComissions, +enteredTotalTrades));

    setDrawDown(drawDownCal(+enteredComissions, losingStreak, +enteredRisk));

    type Data = {
      Outcome: string;
      Trade: number;
      Balance: number;
      number: number;
    };

    setTradeGraph(
      trades.map((outcome, index) => {
        const data: Data = { Outcome: "", Trade: 0, Balance: 0, number: 0 };
        if (outcome > 0) {
          countLosses = 0;
          countWinnings++;
          if (countWinnings > winStreak) {
            winStreak = countWinnings;
          }
          data.Outcome = "WIN";
          data.Trade = +enteredRisk * +enteredRiskReward;
        } else if (outcome < 0) {
          countWinnings = 0;
          countLosses++;
          data.Outcome = "LOSE";
          data.Trade = -Math.abs(+enteredRisk);

          if (countLosses > loseStreak) {
            loseStreak = countLosses;
          }
        } else {
          data.Outcome = "Break Even";
        }

        setLosingStreak(loseStreak);
        setWinningStreak(winStreak);
        data.Trade += -Math.abs(+enteredComissions * 2);
        data.number = index + 1;
        accountBalance += outcome;
        data.Balance = accountBalance;
        return data;
      })
    );
  }, [trades]);

  const resetHandler = () => {
    setWins(0);
    setLosses(0);
    setTrades([]);
    resetAccountBalance();
    resetBreakEven();
    resetComissions();
    resetRisk();
    resetRiskReward();
    resetTotalTrades();
    resetWinLoss();
  };
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // setLosses(0);
    setShowOutput(true);
    // setWins(0);
    setTrades(
      fillArray(
        +enteredTotalTrades,
        +enteredWinLoss,
        +enteredRisk,
        +enteredRiskReward
      )
    );
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.grid}>
          <form onSubmit={formSubmitHandler} className={classes.form}>
            <h3>Inputs</h3>
            <InputField
              label="Account Balance"
              message="Total trading account balance"
              type="number"
              placeholder="10000"
              onChange={accountBalanceChangeHandler}
              onBlur={accountBalanceBlurHandler}
              value={enteredAccountBalance}
              error={accountBalanceHasError}
              iconL={<CurrencyDollar size={20} color={iconColor} />}
            />
            <InputField
              label="Risk On Trade"
              type="number"
              placeholder="100"
              message="The amount of money or (R)'s you will risk losing to find out if the trade works out.  Example 1% of a $10000 account = 100R"
              onChange={riskChangeHandler}
              onBlur={riskBlurHandler}
              value={enteredRisk}
              step="1"
              error={riskHasError}
              iconL={<CurrencyDollar size={20} color={iconColor} />}
              iconR="R"
            />
            <InputField
              label="Risk/Reward Ratio"
              message="Multipler of profit over loss.  Example. If risk is $100, Risk Reward Ratio is 2x , potental return od the trade is $200 at the target price.   "
              type="number"
              placeholder="2"
              onChange={riskRewardChangeHandler}
              onBlur={riskRewardBlurHandler}
              value={enteredRiskReward}
              error={riskRewardHasError}
              iconR="R"
            />
            <InputField
              label="Win/Loss"
              type="number"
              message="How many winning trades vs lossing trades.  Example 55% out of 100 trades 55 will be winning trades, 45 will be losing trades"
              placeholder="50"
              max="99"
              onChange={winLossChangeHandler}
              onBlur={winLossBlurHandler}
              value={enteredWinLoss}
              error={winLossHasError}
              iconR="%"
            />
            <InputField
              label="Break Even"
              message="Percentage of trades are Breakeven"
              type="number"
              placeholder="10"
              onChange={breakEvenChangeHandler}
              onBlur={breakEvenBlurHandler}
              value={enteredBreakEven}
              error={breakEvenHasError}
              iconR="%"
            />
            <InputField
              label="Comissions"
              type="number"
              message="Comissions cost of one direction.  "
              placeholder="1.00"
              onChange={comissionsChangeHandler}
              onBlur={comissionsBlurHandler}
              value={enteredComissions}
              error={comissionsHasError}
              iconL={<CurrencyDollar size={20} color={iconColor} />}
            />
            <InputField
              label="Total Trades"
              type="number"
              max={500}
              message="Total number of trades to simulate.  Example for all trades this year 100"
              placeholder="20"
              onChange={totalTradesChangeHandler}
              onBlur={totalTradesBlurHandler}
              value={enteredTotalTrades}
              error={totalTradesHasError}
            />
            <div className={classes.buttonContainer}>
              <button className={classes.button} onClick={onClick}>
                Calculate
              </button>
              <button
                type="button"
                className={classes.reset}
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </form>
          <div></div>
        </div>
        {showOutput && (
          <PropabilityCal
            winStreak={winningStreak}
            loseStreak={losingStreak}
            comissions={comissions}
            drawDown={drawDown}
            balance={tradeGraph[tradeGraph.length - 1]?.Balance}
            graphData={tradeGraph}
          />
        )}
      </div>
    </Fragment>
  );
};

export default PropabilityCalContainer;
