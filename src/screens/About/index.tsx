import { Heading } from "../../components/Heading";
import { ScrollDown } from "../../components/ScrollDown";
import { Tecnologies } from "../../components/Tecnologies";
import { Text } from "../../components/Text";
import style from "./About.module.scss";

export function About() {
  return (
    <section className={style.about}>
      <div className={style.container}>
        <Heading size="lg" asChild sub className={style.heading}>
          <h2>Sobre mim</h2>
        </Heading>

        <div className={style.content}>
          <div className={style.icons}>
            <Tecnologies className={style.icon} />
          </div>

          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            sed illum recusandae asperiores id tenetur ipsum assumenda nostrum
            pariatur exercitationem, consequuntur odit perferendis labore! Culpa
            quod perspiciatis ratione nobis sint. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus placeat recusandae sunt dolorem
            animi accusamus vel doloremque facilis, accusantium vero, id, nemo
            aspernatur sequi voluptatibus maiores distinctio necessitatibus
            pariatur asperiores? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil voluptatibus, veniam harum accusamus
            consequatur ad nam? A perferendis ipsa voluptatum officia nobis.
            Error blanditiis doloribus quidem aut consequatur culpa ad!
          </Text>
        </div>
      </div>

      <span className={style.about__scroll}>
        <ScrollDown />
      </span>
    </section>
  );
}
