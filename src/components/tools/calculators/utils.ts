export const calShares = (r: number, sl: number) => {
  const shares = (r / sl).toFixed(0);
  return +shares;
};
export const calTradeCost = (shares: number, price: number) => {
  return +(shares * price).toFixed(2);
};

export const calStoplossLong = (price: number, sl: number) => {
  return +(price - sl).toFixed(2);
};

export const calStoplossShort = (price: number, sl: number) => {
  return +(+price + +sl).toFixed(2);
};

export const target = (price: number, rwRatio: number, sl: number) => {
  const targetR = rwRatio * sl;
  return +(targetR + Number(price)).toFixed(2);
};

export const targetShort = (price: number, rwRatio: number, sl: number) => {
  const targetR = rwRatio * sl;
  return +(Number(price) - targetR).toFixed(2);
};

export const calProfit = (shares: number, sl: number, rwRatio: number) => {
  return +(shares * sl * rwRatio).toFixed(2);
};

export const stringValidate = (value: string) => value !== "";
