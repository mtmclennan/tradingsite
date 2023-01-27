import Help from "../Help";
import classes from "./Inputfield.module.css";

const InputField = (props) => {
  const errorState = props.error || null;

  const inputClass =
    props.iconL && props.iconR
      ? classes.inputBoth
      : props.iconL
      ? classes.inputLeft
      : props.iconR
      ? classes.inputRight
      : classes.input;

  return (
    <div className={classes.inputWrapper}>
      <div className={classes.flexContainer}>
        <label htmlFor={props.label}>{props.label}</label>
        <Help message={props.message} />
      </div>
      <div className={classes.flexContainer}>
        {props.iconL && <span className={classes.left}>{props.iconL}</span>}
        <input
          id={props.label}
          type={props.type}
          placeholder={props.placeholder}
          className={`${inputClass} ${errorState ? `${classes.error}` : ""}`}
          onChange={props.onChange}
          onBlur={props.onBlur}
          max={props.max}
          value={props.value}
          step={props.step}
        ></input>
        {props.iconR && <span className={classes.right}>{props.iconR}</span>}
        <div className={classes.childContainer}>{props.children}</div>
      </div>
    </div>
  );
};
export default InputField;
