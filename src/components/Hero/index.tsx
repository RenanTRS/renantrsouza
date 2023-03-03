import { Avatar } from "../Avatar";
import { Heading } from "../Heading";

import style from "./Hero.module.scss";

export function Hero() {
  return (
    <div className={style.hero}>
      <Avatar />

      <div className={style.title}>
        <Heading size="lg">Renan T. R. Souza</Heading>

        <Heading size="md" asChild>
          <h2>Front-end Developer</h2>
        </Heading>
      </div>
    </div>
  );
}
