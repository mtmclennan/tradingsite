import React from "react";
import { Post } from "./interfaces";

export type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type SetStatePostArr = React.Dispatch<React.SetStateAction<Post[]>>;

export type FormEvent = React.FormEvent<HTMLFormElement>;

export type SetStateNumber = React.Dispatch<React.SetStateAction<number>>;

export type ButtonOnClick = React.UIEvent<HTMLButtonElement>;

export type DateOptions = {
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
};
