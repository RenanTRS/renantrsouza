import style from "./Main.module.scss";

import { Tecnologies } from "../../components/Tecnologies";
import { ScrollDown } from "../../components/ScrollDown";
import { Hero } from "../../components/Hero";

export function Main() {
  return (
    <section id="home" className={style.home}>
      <div>
        <Hero />

        <div className={style.icons}>
          <Tecnologies />
        </div>

        <span className={`${style.scroll} ${style.scroll__animate}`}>
          <ScrollDown />
        </span>
      </div>
    </section>
  );
}
