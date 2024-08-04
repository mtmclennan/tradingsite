import classes from "./ProbabilityCal.module.scss";
import OutputField from "../../UI/calculator/OutputField";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Fragment } from "react";

type CustomTooltipProps = {
  active: boolean;
  payload: any;
  label: string;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps | any) => {
  if (active && payload && payload.length) {
    return (
      <div className={classes.tooltip}>
        <p>{`${payload[0].payload.number}`}</p>
        <p>{`${payload[0].payload.Outcome}`}</p>
        <p>{`$${payload[0].payload.Trade}`}</p>
        <p>{`$${payload[0].value}`}</p>

        {/* <p>{`Account Balance : $${payload[0].value}`}</p> */}

        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

type PropabilityCalProps = {
  balance: number;
  winStreak: number;
  loseStreak: number;
  drawDown: number;
  comissions: number;
  graphData: any;
};

const PropabilityCal = ({
  balance,
  winStreak,
  loseStreak,
  drawDown,
  comissions,
  graphData,
}: PropabilityCalProps) => {
  return (
    <Fragment>
      <div className={classes.grid}>
        <div className={classes.outputContainer}>
          <h3 className={classes.title}>Trade Series Outcome</h3>
          <div className={classes.outputWrapper}>
            <OutputField label="Balance" output={balance} currency={true} />
            <OutputField label="Winning Streak" output={winStreak} />
            <OutputField label="Lossing Streak" output={loseStreak} />
            <OutputField
              label="Max Drawdown"
              output={drawDown}
              currency={true}
            />
            <OutputField
              label="Commission Cost"
              output={comissions}
              currency={true}
            />
          </div>
        </div>
      </div>
      <div className={classes.chart}>
        <h3 className={classes.title}>Equity Curve</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={graphData}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke="#e9ecef" dataKey="number" label="Trades" />
            <YAxis
              stroke="#e9ecef"
              type="number"
              domain={["dataMin - 1000", "dataMax + 100"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="basis"
              dataKey="Balance"
              stroke="#0173fd"
              fill="#338ffe"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};
export default PropabilityCal;
