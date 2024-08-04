import classes from "./CalculatorHeading.module.scss";

const CalculatorHeading = ({ title }: { title: string }) => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <h3>Welcome!</h3>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default CalculatorHeading;
