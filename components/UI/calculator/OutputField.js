import { Copy, CurrencyDollar } from "phosphor-react";
import { Fragment, useState } from "react";
import Help from "../Help";
import classes from "./OutputField.module.css";

const OutputField = (props) => {
  const intialState = "Copy to ClipBoard";
  const [copyMessage, setCopyMessage] = useState(intialState);
  const iconColor = "#66fcf1";

  const NoClipboard = (props) => {
    const { label, output } = props;
    return (
      <div>
        <p>{label}</p>
        <div className={classes.container}>
          {props.currency && (
            <span className={classes.left}>
              <CurrencyDollar size={20} color={iconColor} />
            </span>
          )}
          <span
            className={
              props.currency ? classes.outputLeft : classes.outputRound
            }
          >
            {output}
          </span>
        </div>
      </div>
    );
  };

  const Clipboard = (props) => {
    const { label, output } = props;

    const copyClipboardHandler = (e) => {
      if (navigator.clipboard && window.isSecureContext)
        navigator.clipboard
          .writeText(e.currentTarget.value)
          .then(() => setCopyMessage("Copyed!"));
      setTimeout(() => {
        setCopyMessage(intialState);
      }, 2000);
    };

    return (
      <div>
        <p>{label}</p>
        <div className={classes.container}>
          {props.currency && (
            <span className={classes.left}>
              <CurrencyDollar size={20} color={iconColor} />
            </span>
          )}
          <span
            className={props.currency ? classes.output : classes.outputRight}
          >
            {output}
          </span>
          <button
            onClick={copyClipboardHandler}
            className={classes.clip}
            value={output}
          >
            <Copy size={20} color={iconColor} weight="fill" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {!props.copy && (
        <NoClipboard
          label={props.label}
          output={props.output}
          currency={props.currency}
        />
      )}
      {props.copy && (
        <Help
          message={copyMessage}
          icon={
            <Clipboard
              label={props.label}
              output={props.output}
              currency={props.currency}
            />
          }
        />
      )}
    </Fragment>
  );
};

export default OutputField;
