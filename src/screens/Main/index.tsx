import { Heading } from "../../components/Heading";
import style from "./Main.module.scss";

import { Avatar } from "../../components/Avatar";
import { Tecnologies } from "../../components/Tecnologies";
import { ScrollDown } from "../../components/ScrollDown";
import { Hero } from "../../components/Hero";

export function Main() {
  return (
    <section id="home" className={style.home}>
      <div>
        <Hero />

        <Tecnologies />
      </div>

      <ScrollDown />
    </section>
  );
}
