const CompoundInterest = () => {
  const principal = 2000;
  const time = 5; //years
  const rate = 0.08; //interest rate
  const n = 12; // number of compounds per t unit

  const compoundInterest = (
    principal: number,
    time: number,
    rate: number,
    n: number
  ) => {
    const amount = principal * Math.pow(1 + rate / n, n * time);
    const interest = amount - principal;
    return interest;
  };
  console.log(compoundInterest(principal, time, rate, n));
};

export default CompoundInterest;
