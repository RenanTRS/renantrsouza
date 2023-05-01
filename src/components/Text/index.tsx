import { ReactNode } from "react";
import style from "./Text.module.scss";

interface TextProps {
  children: ReactNode;
  className?: any;
}

export function Text(props: TextProps) {
  return <p className={`${style.text} ${props.className}`}>{props.children}</p>;
}
