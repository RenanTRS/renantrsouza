import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";

import style from "./Projects.module.scss";

import { useGetMedia } from "../../hooks/useGetMedia";

import { HomeProps } from "../../../pages";

export function Projects(props: HomeProps) {
  const isSmallScreen = useGetMedia();

  const projects = props.projects;

  return (
    <section id="projects" className={style.projects}>
      <header className={style.header}>
        <Heading size="lg" asChild sub>
          <h2>{isSmallScreen ? "Projetos" : "Meus Projetos"}</h2>
        </Heading>
      </header>

      <div className={style.wrapper}>
        {cards.map((card) => (
          <Card
            cover={card.cover}
            description={card.description}
            logos={card.logos}
            title={card.title}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
}
