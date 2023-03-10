import { ReactNode } from "react";
import style from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
}

export function Text(props: TextProps) {
  return <p className={style.text}>{props.children}</p>;
}
