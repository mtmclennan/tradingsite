import React, { Fragment, useState } from "react";
import useInput from "../../../hooks/use-input";
import classes from "./TradeSizeCal.module.scss";
import {
  calProfit,
  calShares,
  calStoplossLong,
  calTradeCost,
  calStoplossShort,
  stringValidate,
  target,
  targetShort,
} from "./utils";
import OutputField from "../../UI/calculator/OutputField";
import { X, CurrencyDollar } from "phosphor-react";
import ToggleButton from "../../UI/calculator/toggleButton/ToggleButton";
import InputField from "../../UI/calculator/InputField";

const TradeSizeCalAtr = () => {
  const iconColor = "#0173fd";

  const initiaState = {
    ticker: "",
    entryPrice: 0,
    stoploss: 0,
    target: 0,
    shares: 0,
    tradeCost: 0,
    profit: 0,
  };

  const [toggleDirection, setToggleDirection] = useState(true);
  const [output, setOutput] = useState(initiaState);

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
    value: enteredATR,
    valueChangeHandler: ATRChangeHandler,
    inputBlurHandler: ATRBlurHandler,
    isValid: ATRIsValid,
    hasError: ATRHasError,
    reset: resetATR,
  } = useInput(stringValidate);

  const {
    value: enteredATRMuti,
    valueChangeHandler: ATRMutiChangeHandler,
    inputBlurHandler: ATRMutiBlurHandler,
    hasError: ATRMutiHasError,
    reset: resetATRMuti,
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
    riskBlurHandler();
    priceBlurHandler();
    tickerBlurHandler();
    ATRBlurHandler();
    riskRewardBlurHandler();

    if (!riskIsValid || !priceIsValid || !ATRIsValid || !riskRewardIsValid) {
      return;
    }

    const atrStopLossTotal = +enteredATR * +enteredATRMuti;

    const shares = calShares(+enteredRisk, atrStopLossTotal);

    if (toggleDirection) {
      const atrStopLoss = calStoplossLong(+enteredPrice, +atrStopLossTotal);
      setOutput(() => ({
        shares: shares,
        ticker: enteredTicker.toUpperCase(),
        stoploss: +atrStopLoss,
        target: target(+enteredPrice, +enteredRiskReward, +atrStopLossTotal),
        entryPrice: +enteredPrice,
        tradeCost: calTradeCost(shares, +enteredPrice),
        profit: calProfit(shares, +atrStopLossTotal, +enteredRiskReward),
      }));
    }

    if (!toggleDirection) {
      const atrStopLoss = calStoplossShort(+enteredPrice, atrStopLossTotal);

      setOutput(() => ({
        shares: shares,
        ticker: enteredTicker.toUpperCase(),
        stoploss: atrStopLoss,
        target: targetShort(
          +enteredPrice,
          +enteredRiskReward,
          atrStopLossTotal
        ),
        entryPrice: +enteredPrice,
        tradeCost: calTradeCost(shares, +enteredPrice),
        profit: calProfit(shares, atrStopLossTotal, +enteredRiskReward),
      }));
    }
  };

  const resetFormHandler = () => {
    resetATRMuti();
    resetPrice();
    resetRisk();
    resetRiskReward();
    resetATR();
    resetTicker();
    setOutput(initiaState);
  };

  return (
    <div className={classes.container}>
      <div className={classes.gridAtr}>
        <form
          className={classes.riskCalFormAtr}
          onSubmit={onSubmitHandler}
          id="form1"
        >
          <h3 className={classes.title}>Inputs</h3>
          <InputField
            error={tickerHasError}
            label="Symbol"
            message='Symbol of traded equity ("Stock Ticker") Example "MSFT" is the symbol for Microsoft stock'
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
              />
            }
          </InputField>
          <InputField
            label="Entry Price"
            type="number"
            message="The price you want to enter the equity at"
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
            type="number"
            message="The amount of money or (R)'s you will risk losing to find out if the trade works out.  Example 1% of a $10000 account = 100R"
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
            label="Average True Range"
            type="number"
            message="latest Average True Range of equity, from chart indicator."
            placeholder="0.15"
            onChange={ATRChangeHandler}
            onBlur={ATRBlurHandler}
            value={enteredATR}
            step="0.01"
            error={ATRHasError}
            iconR="ATR"
          />
          <InputField
            label="ATR Multiplier"
            type="number"
            placeholder="1.5"
            message="Multipler of ATR. Example - you want your stoploss to be 1.5x the current Average True Range"
            step="0.01"
            onChange={ATRMutiChangeHandler}
            onBlur={ATRMutiBlurHandler}
            value={enteredATRMuti}
            error={ATRMutiHasError}
            iconR={<X size={20} color={iconColor} />}
          />

          <InputField
            label="Risk Reward Ratio"
            type="number"
            message="Multipler of profit over loss.  Example. If risk is $100, Risk Reward Ratio is 2x , potental return od the trade is $200 at the target price.   "
            placeholder="2"
            onChange={riskRewardChangeHandler}
            onBlur={riskRewardBlurHandler}
            value={enteredRiskReward}
            step="0.01"
            error={riskRewardHasError}
            iconR={<X size={20} color={iconColor} />}
          />
        </form>
        <div className={classes.buttonContainerAtr}>
          <button
            className={classes.button}
            type="submit"
            form="form1"
            value="submit"
          >
            Calculate
          </button>
          <button className={classes.reset} onClick={resetFormHandler}>
            Reset
          </button>
        </div>
        {output && (
          <Fragment>
            <div className={classes.outputWrapper1}>
              <h3 className={classes.title}>Trade Order Details</h3>
              <div className={classes.tickerContainer}>
                <p className={classes.ticker}>{output.ticker}</p>
                <OutputField
                  label={toggleDirection ? "Quantity Long" : "Quantity Short"}
                  output={output.shares}
                  copy={true}
                />
              </div>
              <div className={classes.orderPrices}>
                <OutputField
                  label={
                    toggleDirection ? " BUY Entry Price" : "SELL Entry Price"
                  }
                  output={output.entryPrice}
                  copy={true}
                  currency={true}
                />
                <OutputField
                  label={toggleDirection ? "Stop Loss" : "Buy Stop"}
                  output={output.stoploss}
                  copy={true}
                  currency={true}
                />
                <OutputField
                  label="Target Price"
                  output={output.target}
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
                  output={output.profit}
                  currency={true}
                />

                <OutputField
                  label="Trade Cost"
                  output={output.tradeCost}
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
export default TradeSizeCalAtr;
