import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" className={style.button}>
      {props.children}
    </button>
  );
}
