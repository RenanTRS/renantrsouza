import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";

import style from "./Projects.module.scss";

import { useGetMedia } from "../../hooks/useGetMedia";

export function Projects() {
  const isSmallScreen = useGetMedia();

  const cards = [
    {
      title: "Projeto 1",
      id: "1",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    },
    {
      title: "Projeto 2",
      id: "2",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    },
    {
      title: "Projeto 3",
      id: "3",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    },
    {
      title: "Projeto 1",
      id: "4",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    },
    {
      title: "Projeto 2",
      id: "5",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    },
    {
      title: "Projeto 3",
      id: "6",
      cover: fakeCover,
      mobileImg: "",
      desktopImg: "",
      description: "ldjsflksdjlkfjdsk",
      gif: "",
      logos: ["css", "html"]
    }
  ];

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
