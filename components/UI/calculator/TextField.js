import classes from "./TextField.module.css";

const TextField = (props) => {
  const errorState = props.error;
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor={props.label}>{props.label}</label>
      <div className={classes.flexContainer}>
        <textarea
          id={props.label}
          cols="74"
          placeholder={props.placeholder}
          className={`${classes.input} ${errorState ? `${classes.error}` : ""}`}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        ></textarea>
      </div>
    </div>
  );
};
export default TextField;
