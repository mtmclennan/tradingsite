import { Copy, CurrencyDollar } from "phosphor-react";
import React, { Fragment, useState } from "react";
import Help from "../Help";
import classes from "./OutputField.module.css";

interface OutputFieldProps {
  label: string;
  output: number | string;
  currency?: boolean;
  copy?: boolean;
}

const OutputField = ({ label, output, currency, copy }: OutputFieldProps) => {
  const intialState = "Copy to ClipBoard";
  const [copyMessage, setCopyMessage] = useState(intialState);
  const iconColor = "#66fcf1";

  const NoClipboard = ({ label, output }: OutputFieldProps) => {
    return (
      <div>
        <p>{label}</p>
        <div className={classes.container}>
          {currency && (
            <span className={classes.left}>
              <CurrencyDollar size={20} color={iconColor} />
            </span>
          )}
          <span className={currency ? classes.outputLeft : classes.outputRound}>
            {output}
          </span>
        </div>
      </div>
    );
  };

  const Clipboard = ({ label, output, currency }: OutputFieldProps) => {
    const copyClipboardHandler = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      if (navigator.clipboard && window.isSecureContext)
        navigator.clipboard
          .writeText(event.currentTarget.value)
          .then(() => setCopyMessage("Copyed!"));
      setTimeout(() => {
        setCopyMessage(intialState);
      }, 2000);
    };

    return (
      <div>
        <p>{label}</p>
        <div className={classes.container}>
          {currency && (
            <span className={classes.left}>
              <CurrencyDollar size={20} color={iconColor} />
            </span>
          )}
          <span className={currency ? classes.output : classes.outputRight}>
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
      {!copy && (
        <NoClipboard label={label} output={output} currency={currency} />
      )}
      {copy && (
        <Help
          message={copyMessage}
          icon={<Clipboard label={label} output={output} currency={currency} />}
        />
      )}
    </Fragment>
  );
};

export default OutputField;
