import classes from "./Hero.module.scss";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <h3>Welcome!</h3>
        <h1>{title}</h1>
      </div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Hero;
