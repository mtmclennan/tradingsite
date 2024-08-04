import useInput from "../../../hooks/use-input";
import React, { Fragment, SetStateAction, useState } from "react";
import InputField from "../../UI/calculator/InputField";
import { CurrencyDollar } from "phosphor-react";
import classes from "./RiskOnTradeCal.module.scss";
import { stringValidate } from "./utils";
import OutputField from "../../UI/calculator/OutputField";

const RiskOnTradeCal = () => {
  const [riskOutput, setRiskOutput] =
    useState<SetStateAction<number | string>>();

  const iconColor = "#0173fd";

  const {
    value: enteredBalance,
    valueChangeHandler: balanceChangeHandler,
    inputBlurHandler: balanceBlurHandler,
    isValid: balanceIsValid,
    hasError: balanceHasError,
    reset: resetBalance,
  } = useInput(stringValidate);

  const {
    value: enteredRisk,
    valueChangeHandler: riskChangeHandler,
    inputBlurHandler: riskBlurHandler,
    isValid: riskIsValid,
    hasError: riskHasError,
    reset: resetRisk,
  } = useInput(stringValidate);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    riskBlurHandler();
    balanceBlurHandler();
    if (!riskIsValid || !balanceIsValid) {
      return;
    }

    setRiskOutput(
      (Number(enteredBalance) * (Number(enteredRisk) / 100)).toFixed(0)
    );
  };

  const resetFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    resetBalance();
    resetRisk();
    setRiskOutput(0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <form
          id="form1"
          className={classes.riskCalForm}
          onSubmit={onSubmitHandler}
        >
          <h3 className={classes.title}>Inputs</h3>
          <InputField
            label="Account Balance"
            message="Total trading account balance"
            type="number"
            placeholder="10000"
            onChange={balanceChangeHandler}
            onBlur={balanceBlurHandler}
            value={enteredBalance}
            step="100"
            error={balanceHasError}
            iconL={<CurrencyDollar size={20} color={iconColor} />}
          />
          <InputField
            label="Account Risk Percentage Per Trade"
            message="The amount of money or (R)'s you will risk losing to find out if the trade works out.  Example 1% of a $10000 account = 100R"
            type="number"
            placeholder="1"
            onChange={riskChangeHandler}
            onBlur={riskBlurHandler}
            value={enteredRisk}
            step="0.1"
            error={riskHasError}
            iconR="%"
          />

          <div className={classes.buttonContainer}>
            <button
              className={classes.button}
              type="submit"
              form="form1"
              value="submit"
            >
              Calculate
            </button>
            <button
              type="button"
              className={classes.reset}
              onClick={resetFormHandler}
            >
              reset
            </button>
          </div>
        </form>
        {riskOutput && (
          <Fragment>
            <div className={classes.outputWrapper1}>
              <OutputField
                label="Risk on Each Trade"
                output={`${riskOutput}R`}
                currency={true}
              />
            </div>
            {riskOutput && +enteredRisk > 2 && (
              <div className={classes.outputWrapper2}>
                <p>Warning! {enteredRisk}% is Lot of Risk Per Trade</p>
                <p>The Propability of Account Ruin is High</p>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default RiskOnTradeCal;
