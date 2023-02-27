import { Avatar } from "../Avatar";
import { Heading } from "../Heading";
import { Tecnologies } from "../Tecnologies";

import style from "./Hero.module.scss";

export function Hero() {
  return (
    <div className={style.hero}>
      <Avatar />

      <div>
        <Heading size="lg">Renan T. R. Souza</Heading>

        <Heading size="md" asChild>
          <h2>Front-end Developer</h2>
        </Heading>
      </div>
    </div>
  );
}
