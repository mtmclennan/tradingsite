import { Fragment, useEffect, useState } from "react";
import { SetStateBoolean } from "../../../../types/index.types";
import classes from "./ToggleButton.module.scss";

interface ToggleButtonProps {
  toggleDirection: boolean;
  setToggleDirection: SetStateBoolean;
  disable: boolean;
}

const ToggleButton = ({
  toggleDirection,
  setToggleDirection,
  disable = false,
}: ToggleButtonProps) => {
  const longBtnHandler = () => {
    if (!disable) setToggleDirection(true);
  };

  const shortBtnHandler = () => {
    if (!disable) setToggleDirection(false);
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
