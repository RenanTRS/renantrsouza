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
        {projects.map((project) => (
          <Card
            icon={project.icon.url}
            cover={project.cover.url}
            description={project.description}
            logos={project.tecnologies}
            title={project.name}
            hero={project.hero.url}
            gif={project.gif.url}
            key={project.id}
            linkToDeploy={project.linkDeploy}
            linkToGit={project.linkGithub}
          />
        ))}
      </div>
    </section>
  );
}
