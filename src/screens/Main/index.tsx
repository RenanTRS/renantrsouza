import { Heading } from "../../components/Heading";
import style from "./Main.module.scss";

import { Avatar } from "../../components/Avatar";
import { CaretDoubleDown } from "phosphor-react";
import { Tecnologies } from "../../components/Tecnologies";
import { ScrollDown } from "../../components/ScrollDown";

export function Main() {
  return (
    <section id="home" className={`${style.home}`}>
      <Avatar />

      <div>
        <Heading size="lg">Renan T. R. Souza</Heading>

        <Heading size="sm" asChild>
          <h2>Front-end Developer</h2>
        </Heading>
      </div>

      <Tecnologies />

      <ScrollDown />
    </section>
  );
}
