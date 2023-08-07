import Image from "next/legacy/image";
import React, { Fragment, useState } from "react";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { emailValidate } from "../../lib/input-utils";
import { Res } from "../../types/interfaces";
import logo from "../../public/assets/ColorEMLargelogo-nobackground.png";
import Modal from "./Modal";
import classes from "./SubscribeButton.module.scss";

const SubscribeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { error, isLoading, sendRequest } = useHttp();

  const onCloseHandler = () => {
    setShowModal(false);
  };

  const onClickHandler = () => {
    setShowModal(true);
  };

  const ThankYouMessage = () => {
    return (
      <div className={classes.content}>
        <h1>THANK YOU</h1>
      </div>
    );
  };

  const SignUpMessage = () => {
    const {
      value,
      inputBlurHandler,
      reset,
      isValid,
      valueChangeHandler,
      hasError,
    } = useInput(emailValidate);

    const subscriberHandler = () => {
      if (!isValid || !process.env.NEXT_PUBLIC_SIGNUP_URL) return;

      sendRequest(
        {
          url: process.env.NEXT_PUBLIC_SIGNUP_URL,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email: value,
          },
        },
        (res: Res) => {
          if (res.status === "success") {
            reset();
            setShowThankYou(true);
            setTimeout(() => {
              setShowModal(false);
              setShowThankYou(false);
            }, 5000);
          }
        }
      );
    };

    const inputClasses = hasError
      ? `${classes.input} ${classes.error}`
      : classes.input;
    return (
      <div className={classes.content}>
        <h1>STAY TUNED</h1>
        <p>
          Subscribe to our newsletter and never miss out on new content to help
          traders.
        </p>
        <div className={classes.inputContainer}>
          <input
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            value={value}
            className={inputClasses}
            placeholder="email@example.com"
          ></input>
          <button onClick={subscriberHandler}>SIGN UP</button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {showModal && (
        <Modal onClose={onCloseHandler}>
          <div className={classes.container}>
            <div className={classes.logo}>
              <Image src={logo} alt="EDGEINMIND" />
            </div>
            {showThankYou ? <ThankYouMessage /> : <SignUpMessage />}
          </div>
        </Modal>
      )}
      <button onClick={onClickHandler}>SUBSCRIBE</button>
    </Fragment>
  );
};

export default SubscribeButton;
