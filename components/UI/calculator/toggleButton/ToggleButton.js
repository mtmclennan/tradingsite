import { Fragment, useEffect, useState } from "react";
import classes from "./ToggleButton.module.css";

const ToggleButton = (props) => {
  const longBtnHandler = () => {
    props.setToggleDirection(true);
  };

  const shortBtnHandler = () => {
    props.setToggleDirection(false);
  };

  return (
    <Fragment>
      <button
        type="button"
        onClick={longBtnHandler}
        className={`${classes.btnLong} ${
          props.toggleDirection ? classes.active : classes.nonActive
        }`}
      >
        Long
      </button>
      <button
        type="button"
        onClick={shortBtnHandler}
        className={`${classes.btnShort} ${
          props.toggleDirection ? classes.nonActive : classes.active
        }`}
      >
        Short
      </button>
    </Fragment>
  );
};

export default ToggleButton;
