import { useState, Fragment, useEffect } from "react";
import InputField from "../../UI/calculator/InputField";
import TextField from "../../UI/calculator/TextField";
import classes from "./TradingPlan.module.css";
import useInput from "../../../hooks/use-input";
import TradePlanOutput from "./TradingPlanOutput";
import { stringValidate } from "../calculators/utils";

const TradingPlan = () => {
  const [showOutput, setShowOutput] = useState(false);
  const generateHandler = () => {
    setShowOutput(true);
  };

  const {
    value: routineValue,
    valueChangeHandler: routineChangeHandler,
    inputBlurHandler: routineBlurHandler,
    isValid: routineIsValid,
    hasError: routineHasError,
    reset: resetRoutine,
  } = useInput(stringValidate);

  const {
    value: riskValue,
    valueChangeHandler: riskChangeHandler,
    inputBlurHandler: riskBlurHandler,
    isValid: riskIsValid,
    hasError: riskHasError,
    reset: resetRisk,
  } = useInput(stringValidate);
  const {
    value: positionsValue,
    valueChangeHandler: positionsChangeHandler,
    inputBlurHandler: positionsBlurHandler,
    isValid: positionsIsValid,
    hasError: positionsHasError,
    reset: resetPositions,
  } = useInput(stringValidate);
  const {
    value: targetValue,
    valueChangeHandler: targetChangeHandler,
    inputBlurHandler: targetBlurHandler,
    isValid: targetIsValid,
    hasError: targetHasError,
    reset: resetTarget,
  } = useInput(stringValidate);
  const {
    value: stoplossValue,
    valueChangeHandler: stoplossChangeHandler,
    inputBlurHandler: stoplossBlurHandler,
    isValid: stoplossIsValid,
    hasError: stoplossHasError,
    reset: resetStoploss,
  } = useInput(stringValidate);
  const {
    value: whatValue,
    valueChangeHandler: whatChangeHandler,
    inputBlurHandler: whatBlurHandler,
    isValid: whatIsValid,
    hasError: whatHasError,
    reset: resetWhat,
  } = useInput(stringValidate);
  const {
    value: whenValue,
    valueChangeHandler: whenChangeHandler,
    inputBlurHandler: whenBlurHandler,
    isValid: whenIsValid,
    hasError: whenHasError,
    reset: resetWhen,
  } = useInput(stringValidate);
  const {
    value: entryValue,
    valueChangeHandler: entryChangeHandler,
    inputBlurHandler: entryBlurHandler,
    isValid: entryIsValid,
    hasError: entryHasError,
    reset: resetEntry,
  } = useInput(stringValidate);
  const {
    value: loggingValue,
    valueChangeHandler: loggingChangeHandler,
    inputBlurHandler: loggingeBlurHandler,
    isValid: loggingeIsValid,
    hasError: loggingHasError,
    reset: resetLogging,
  } = useInput(stringValidate);

  useEffect(() => {
    console.log(routineValue);
  }, [routineValue]);
  return (
    <Fragment>
      <div className="trading-plan__container">
        <div className="trading-plan__grid">
          <TextField
            onChange={routineChangeHandler}
            onBlur={routineBlurHandler}
            value={routineValue}
            label="Daliy Routine"
          />
          <InputField
            onChange={riskChangeHandler}
            onBlur={riskBlurHandler}
            value={riskValue}
            label="Risk per Trade"
            type="number"
            placeholder="100"
          />
          <InputField
            onChange={positionsChangeHandler}
            onBlur={positionsBlurHandler}
            value={positionsValue}
            label="Max Positions"
            type="number"
            placeholder="4"
          />
          <InputField
            onChange={targetChangeHandler}
            onBlur={targetBlurHandler}
            value={targetValue}
            label="Min Price Target"
            type="number"
            placeholder="2"
          />
          <InputField
            onChange={stoplossChangeHandler}
            onBlur={stoplossBlurHandler}
            value={stoplossValue}
            label="How and Where to Place Stop loss"
            type="text"
            placeholder="ATR X 1.25"
          />
          <TextField
            onChange={whatChangeHandler}
            onBlur={whatBlurHandler}
            value={whatValue}
            label="What to Trade"
          />
          <TextField
            onChange={whenChangeHandler}
            onBlur={whenBlurHandler}
            value={whenValue}
            label="When to Enter"
          />
          <TextField
            onChange={entryChangeHandler}
            onBlur={entryBlurHandler}
            value={entryValue}
            label="How to Enter"
          />
          <TextField
            onChange={loggingChangeHandler}
            onBlur={loggingeBlurHandler}
            value={loggingValue}
            label="How Will you Track the Trades"
          />
          <div className={classes.buttonContainer}>
            <button className={classes.button}>Save</button>
            <button onClick={generateHandler} className={classes.button}>
              Generate
            </button>
          </div>
        </div>
      </div>
      {showOutput && (
        <TradePlanOutput
          routine={routineValue}
          risk={+riskValue}
          whatToTrade={whatValue}
          whenToTrade={whenValue}
          entry={entryValue}
          logging={loggingValue}
        />
      )}
    </Fragment>
  );
};

export default TradingPlan;
