import classes from "./Card.module.scss";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <li className={classes.card}>{children}</li>;
};

export default Card;
