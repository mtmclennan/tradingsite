import classes from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <p>Welcome!</p>
        <h1>{props.title}</h1>
      </div>
    </section>
  );
};

export default Hero;
