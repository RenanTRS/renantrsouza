import { Heading } from "../../components/Heading";
import { ScrollDown } from "../../components/ScrollDown";
import { Tecnologies } from "../../components/Tecnologies";
import { Text } from "../../components/Text";

import style from "./About.module.scss";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref: aboutRef, inView: isElementInView } = useInView({
    triggerOnce: true,
    threshold: 1
  });
  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <Heading
          size="lg"
          asChild
          sub
          className={`${style.heading} ${
            isElementInView ? style.heading__animate : "before-scroll"
          }`}
        >
          <h2 ref={aboutRef}>Sobre mim</h2>
        </Heading>

        <div className={style.content}>
          <div className={style.icons} aria-hidden>
            <Tecnologies
              className={`${style.icon} ${
                isElementInView ? style.icon__animate : "before-scroll"
              }`}
            />
          </div>

          <article
            ref={aboutRef}
            className={`${style.article} ${
              isElementInView ? style.article__animate : "before-scroll"
            }`}
          >
            <Text>
              Olá, sou um <strong lang="en-us">Front-end Developer</strong> com
              foco em <strong lang="en-US">React Js</strong> e{" "}
              <strong lang="en-us">Typescript</strong> há mais de um ano, no
              presente momento estou estudando a construção de{" "}
              <span lang="en-us">Single Page Applications</span> (SPA)
              utilizando o <span lang="en-us">Framework</span>{" "}
              <strong lang="en-us">Next Js</strong>, também tenho planos para em
              breve expandir meus conhecimentos para outras stacks como{" "}
              <strong lang="en-us">Back-end</strong> e{" "}
              <strong lang="en-us">Mobile</strong>. Sou formado em Análise e
              Desenvolvimento de Sistemas (ADS) pela Escola Superior Batista do
              Amazonas (ESBAM) e apaixonado por tecnologia, ainda não possuo
              experiências profissionais como um desenvolvedor, mas venho
              estudando e me aprimorando cada vez mais para agregar valor,
              contribuir e aprender com o time ou equipe de desenvolvedores em
              que eu estiver.
            </Text>
          </article>
        </div>
      </div>

      <span
        className={`${style.about__scroll} ${
          isElementInView ? style.about__scroll__animate : "before-scroll"
        }`}
      >
        <ScrollDown />
      </span>
    </section>
  );
}
