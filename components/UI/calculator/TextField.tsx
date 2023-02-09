import classes from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  error: boolean;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string | number;
}

const TextField = ({
  label,
  error,
  placeholder,
  onChange,
  onBlur,
  value,
}: TextFieldProps) => {
  const errorState = error;
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor={label}>{label}</label>
      <div className={classes.flexContainer}>
        <textarea
          id={label}
          cols={74}
          placeholder={placeholder}
          className={`${classes.input} ${errorState ? `${classes.error}` : ""}`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        ></textarea>
      </div>
    </div>
  );
};
export default TextField;
