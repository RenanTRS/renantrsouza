import style from "./ScrollDown.module.scss";
import { CaretDoubleDown } from "phosphor-react";

export function ScrollDown() {
  return (
    <>
      <CaretDoubleDown className={style.scroll} />
    </>
  );
}
