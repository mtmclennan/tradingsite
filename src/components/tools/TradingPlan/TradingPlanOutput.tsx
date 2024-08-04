import classes from "./TradingPlanOutput.module.css";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useRef } from "react";

interface TradePlanProps {
  routine: string;
  risk: number;
  whatToTrade: string;
  whenToTrade: string;
  entry: string;
  logging: string;
}

const TradePlanOutput = ({
  routine,
  risk,
  whatToTrade,
  whenToTrade,
  entry,
  logging,
}: TradePlanProps) => {
  const pageToPrint = useRef<HTMLDivElement>(null);
  const printHandler = useReactToPrint({
    content: () => pageToPrint.current,
  });

  return (
    <div className={classes.container}>
      <div className={classes.page} ref={pageToPrint}>
        <div className={classes.logo}>
          <h1>EdgeInMind</h1>
        </div>
        <div className={classes.main}>
          <h2 className={classes.title}>Trading Plan</h2>
          <h3 className={classes.heading}>Daily Routine</h3>
          <p>{routine}</p>
          <h2 className={classes.heading}>Risk Management</h2>
          <p>{risk}</p>
          <h2 className={classes.heading}>What to Trade</h2>
          <p>{whatToTrade}</p>
          <h2 className={classes.heading}>When To Enter</h2>
          <p>{whenToTrade}</p>
          <h2 className={classes.heading}>How to Enter</h2>
          <p>{entry}</p>
          <h2 className={classes.heading}>How to Log Trades</h2>
          <p>{logging}</p>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={printHandler}>
          Print
        </button>
      </div>
    </div>
  );
};
export default TradePlanOutput;
