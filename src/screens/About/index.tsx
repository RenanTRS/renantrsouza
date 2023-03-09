import { Heading } from "../../components/Heading";
import { ScrollDown } from "../../components/ScrollDown";
import { Tecnologies } from "../../components/Tecnologies";
import { Text } from "../../components/Text";
import style from "./About.module.scss";

export function About() {
  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <Heading size="lg" asChild sub className={style.heading}>
          <h2>Sobre mim</h2>
        </Heading>

        <div className={style.content}>
          <div className={style.icons}>
            <Tecnologies className={style.icon} />
          </div>

          <Text>
            Olá, sou um <strong>Front-end</strong> developer com foco em{" "}
            <strong>ReactJs</strong> e <strong>TypeScript</strong> há mais de 01
            ano, no presente momento estou estudando a construção de Single Page
            Applications (SPA) utilizando o Framework <strong>NextJs</strong>,
            também tenho planos para em breve expandir meus conhecimentos para
            outras stacks como <strong>Back-end</strong> e{" "}
            <strong>Mobile</strong>. Sou formado em Análise e Desenvolvimento de
            Sistemas (ADS) pela Escola Superior Batista do Amazonas (ESBAM) e
            apaixonado por tecnologia, atualmente ainda não possuo experiências
            profissionais como um desenvolvedor, mas venho estudando e me
            aprimorando cada vez mais para agregar valor, contribuir e aprender
            com o time ou equipe de desenvolveores que eu estiver.
          </Text>
        </div>
      </div>

      <span className={style.about__scroll}>
        <ScrollDown />
      </span>
    </section>
  );
}
