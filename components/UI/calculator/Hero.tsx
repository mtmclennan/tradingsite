import classes from "./Hero.module.css";

const Hero = ({ title }: { title: string }) => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <p>Welcome!</p>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Hero;
