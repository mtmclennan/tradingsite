import classes from "./Graphic.module.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const trades = [
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13000,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13300,
  },
  {
    outcome: "LOSE",
    Trade: -100,
    balance: 13200,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13500,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13000,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13000,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13000,
  },
  {
    outcome: "WIN",
    Trade: 300,
    balance: 13000,
  },
];

const Graphic = () => {
  const [tradeArray, setTradeArray] = useState<any[]>([]);
  const [merge, setMerge] = useState(false);

  const trades = [
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13000,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13300,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13200,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13500,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13400,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13300,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13200,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13100,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 13000,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 12900,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 12800,
    },
    {
      outcome: "LOSE",
      Trade: -100,
      balance: 12700,
    },
  ];

  const tradesWin = [
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13000,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13600,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 13900,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 14200,
    },
    {
      outcome: "WIN",
      Trade: 300,
      balance: 14500,
    },
  ];

  useEffect(() => {
    if (!merge) setTradeArray(trades);

    if (merge) setTradeArray(trades.concat(tradesWin));
  }, [merge]);

  const addWinsHandler = () => {
    setMerge(true);
  };

  const resetHandler = () => {
    setMerge(false);
  };

  return (
    <div className={classes.chart}>
      <h3 className={classes.title}>Equity Curve</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={tradeArray}
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
          <Tooltip />
          <Area
            type="basis"
            dataKey="balance"
            stroke="#66fcf1"
            fill="#45a29e"
          />
        </AreaChart>
      </ResponsiveContainer>
      <button onClick={addWinsHandler}>Next</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Graphic;
