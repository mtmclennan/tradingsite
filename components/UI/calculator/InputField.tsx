import Help from "../Help";
import classes from "./InputField.module.scss";

interface InputFieldProps {
  error?: boolean;
  iconL?: React.ReactNode;
  iconR?: React.ReactNode;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: () => void;
  value?: string | number;
  max?: string | number;
  step?: string | number;
  placeholder: string;
  message?: string;
  type?: string;
  children?: React.ReactNode;
}

const InputField = (props: InputFieldProps) => {
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
        {props.message && <Help message={props.message} />}
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
