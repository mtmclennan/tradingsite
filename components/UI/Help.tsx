import { Question } from "phosphor-react";
import { Fragment, useState } from "react";
import classes from "./Help.module.css";

type HelpProps = {
  delay: number;
  color: string;
  size: number;
  direction: string;
  message: string;
  icon?: React.ReactNode;
};

const Help = ({ delay, color, size, direction, message, icon }: HelpProps) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const colorSelect = color || "#c5c6c7";
  const sizeSelect = size || 16;

  const AnswerBox = ({ message }: { message: string }) => {
    return (
      <div className={`${classes.answerBox} ${direction || classes.top}`}>
        <p>{message}</p>
      </div>
    );
  };

  return (
    <Fragment>
      <span
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
        className={classes.icon}
      >
        {active && <AnswerBox message={message} />}
        {icon || <Question size={sizeSelect} color={colorSelect} />}
      </span>
    </Fragment>
  );
};
export default Help;
