import React, { Fragment, useState } from "react";
import useInput from "../../../hooks/use-input";
import classes from "./TradeSizeCal.module.scss";
import OutputField from "../../UI/calculator/OutputField";
import { X, CurrencyDollar } from "phosphor-react";
import {
  stringValidate,
  calProfit,
  calShares,
  calStoplossLong,
  calStoplossShort,
  calTradeCost,
  target,
  targetShort,
} from "./utils";
import InputField from "../../UI/calculator/InputField";
import ToggleButton from "../../UI/calculator/toggleButton/ToggleButton";

const TradeSizeCal = () => {
  const initiaState = {
    ticker: "",
    entryPrice: 0,
    stoploss: 0,
    target: 0,
    shares: 0,
    tradeCost: 0,
    profit: 0,
  };

  const iconColor = "#0173fd";

  const [Output, setOutput] = useState(initiaState);
  const [toggleDirection, setToggleDirection] = useState(true);
  const [disableBtn, setDisableBtn] = useState(false);

  const {
    value: enteredRisk,
    valueChangeHandler: riskChangeHandler,
    inputBlurHandler: riskBlurHandler,
    isValid: riskIsValid,
    hasError: riskHasError,
    reset: resetRisk,
  } = useInput(stringValidate);

  const {
    value: enteredRiskReward,
    valueChangeHandler: riskRewardChangeHandler,
    inputBlurHandler: riskRewardBlurHandler,
    isValid: riskRewardIsValid,
    hasError: riskRewardHasError,
    reset: resetRiskReward,
  } = useInput(stringValidate);

  const {
    value: enteredSl,
    valueChangeHandler: slChangeHandler,
    inputBlurHandler: slBlurHandler,
    isValid: slIsValid,
    hasError: slHasError,
    reset: resetSl,
  } = useInput(stringValidate);

  const {
    value: enteredPrice,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    isValid: priceIsValid,
    hasError: priceHasError,
    reset: resetPrice,
  } = useInput(stringValidate);

  const {
    value: enteredTicker,
    hasError: tickerHasError,
    valueChangeHandler: tickerChangeHandler,
    inputBlurHandler: tickerBlurHandler,
    reset: resetTicker,
  } = useInput(stringValidate);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setDisableBtn(true);
    riskBlurHandler();
    priceBlurHandler();
    tickerBlurHandler();
    slBlurHandler();
    riskRewardBlurHandler();

    if (!riskIsValid || !priceIsValid || !slIsValid || !riskRewardIsValid) {
      return;
    }

    const shares = calShares(+enteredRisk, +enteredSl);
    if (toggleDirection) {
      const stoploss = calStoplossLong(+enteredPrice, +enteredSl);

      setOutput(() => ({
        shares: shares,
        ticker: enteredTicker.toUpperCase(),
        stoploss: stoploss,
        target: target(+enteredPrice, +enteredRiskReward, +enteredSl),
        entryPrice: +enteredPrice,
        tradeCost: calTradeCost(shares, +enteredPrice),
        profit: calProfit(+shares, +enteredSl, +enteredRiskReward),
      }));
    }

    if (!toggleDirection) {
      const stoploss = calStoplossShort(+enteredPrice, +enteredSl);
      setOutput(() => ({
        shares: shares,
        ticker: enteredTicker.toUpperCase(),
        stoploss: stoploss,
        target: targetShort(+enteredPrice, +enteredRiskReward, +enteredSl),
        entryPrice: +enteredPrice,
        tradeCost: calTradeCost(shares, +enteredPrice),
        profit: calProfit(shares, +enteredSl, +enteredRiskReward),
      }));
    }
  };

  const resetFormHandler = () => {
    setDisableBtn(false);
    resetPrice();
    resetRisk();
    resetRiskReward();
    resetSl();
    resetTicker();
    setOutput(initiaState);
  };

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <form
          className={classes.riskCalForm}
          onSubmit={onSubmitHandler}
          id="form1"
        >
          <h3 className={classes.title}>Input Trade</h3>
          <InputField
            error={tickerHasError}
            message='Symbol of traded equity ("Stock Ticker") Example "MSFT" is the symbol for Microsoft stock'
            label="Symbol"
            type="text"
            placeholder="SPY"
            onChange={tickerChangeHandler}
            onBlur={tickerBlurHandler}
            value={enteredTicker}
          >
            {
              <ToggleButton
                setToggleDirection={setToggleDirection}
                toggleDirection={toggleDirection}
                disable={disableBtn}
              />
            }
          </InputField>

          <InputField
            label="Entry Price"
            message="The price value in which you want to enter the equity."
            type="number"
            placeholder="56.45"
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            value={enteredPrice}
            step="0.01"
            error={priceHasError}
            iconL={<CurrencyDollar size={20} color={iconColor} />}
          />

          <InputField
            label="Risk On Trade"
            message="The amount of money or (R)'s you will risk losing to find out if the trade works out.  Example 1% of a $10000 account = 100R"
            type="number"
            placeholder="100"
            onChange={riskChangeHandler}
            onBlur={riskBlurHandler}
            value={enteredRisk}
            step="1"
            error={riskHasError}
            iconL={<CurrencyDollar size={20} color={iconColor} />}
            iconR="R"
          />

          <InputField
            label="Stop Distance"
            type="number"
            message="The dollar amount differance between the entry price and the stop loss.  How much room will you give the trade to find out the outcome."
            placeholder="0.15"
            onChange={slChangeHandler}
            onBlur={slBlurHandler}
            value={enteredSl}
            step="0.01"
            error={slHasError}
            iconL={<CurrencyDollar size={20} color={iconColor} />}
          />

          <InputField
            label="Risk Reward Ratio"
            message="Multipler of profit over loss.  Example. with $100 risk, Risk Reward Ratio of 2x , the potental return of the trade is $200, if the trade can be exited at the target price.   "
            type="number"
            placeholder="2"
            onChange={riskRewardChangeHandler}
            onBlur={riskRewardBlurHandler}
            value={enteredRiskReward}
            step="0.01"
            error={riskRewardHasError}
            iconR={<X size={20} color={iconColor} />}
          />
        </form>
        <div className={classes.buttonContainer}>
          <button
            className={classes.button}
            type="submit"
            form="form1"
            value="submit"
          >
            Calculate
          </button>
          <button className={classes.reset} onClick={resetFormHandler}>
            reset
          </button>
        </div>
        {Output && (
          <Fragment>
            <div className={classes.outputWrapper}>
              <h3 className={classes.title}>Trade Order Details</h3>
              <div className={classes.tickerContainer}>
                <p className={classes.ticker}>{Output.ticker}</p>
                <OutputField
                  label={toggleDirection ? "Quantity Long" : "Quantity Short"}
                  output={Output.shares}
                  copy={true}
                />
              </div>
              <div className={classes.orderPrices}>
                <OutputField
                  label={
                    toggleDirection ? " BUY Entry Price" : "SELL Entry Price"
                  }
                  output={Output.entryPrice}
                  copy={true}
                  currency={true}
                />
                <OutputField
                  label={toggleDirection ? "Stop Loss" : "Buy Stop"}
                  output={Output.stoploss}
                  copy={true}
                  currency={true}
                />
                <OutputField
                  label="Target Price"
                  output={Output.target}
                  copy={true}
                  currency={true}
                />
              </div>
              <div className={classes.costContainer}>
                <OutputField
                  label="Loss at StopLoss"
                  output={enteredRisk}
                  currency={true}
                />
                <OutputField
                  label="Profit at Target"
                  output={Output.profit}
                  currency={true}
                />

                <OutputField
                  label="Trade Cost"
                  output={Output.tradeCost}
                  currency={true}
                />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default TradeSizeCal;
