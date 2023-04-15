import { Fragment, useEffect, useState } from "react";
import { SetStateBoolean } from "../../../../types/index.types";
import classes from "./ToggleButton.module.scss";

interface ToggleButtonProps {
  toggleDirection: boolean;
  setToggleDirection: SetStateBoolean;
}

const ToggleButton = ({
  toggleDirection,
  setToggleDirection,
}: ToggleButtonProps) => {
  const longBtnHandler = () => {
    setToggleDirection(true);
  };

  const shortBtnHandler = () => {
    setToggleDirection(false);
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={longBtnHandler}
        className={`${classes.btnLong} ${
          toggleDirection ? classes.active : classes.nonActive
        }`}
      >
        Long
      </button>
      <button
        type="button"
        onClick={shortBtnHandler}
        className={`${classes.btnShort} ${
          toggleDirection ? classes.nonActive : classes.active
        }`}
      >
        Short
      </button>
    </Fragment>
  );
};

export default ToggleButton;
