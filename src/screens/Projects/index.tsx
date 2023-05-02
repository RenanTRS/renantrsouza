import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";

import style from "./Projects.module.scss";

import { useGetMedia } from "../../hooks/useGetMedia";

import { HomeProps } from "../../../pages";
import { useInView } from "react-intersection-observer";

export function Projects(props: HomeProps) {
  const { ref: projectRef, inView: isElementInView } = useInView({
    triggerOnce: true,
    threshold: 1
  });

  const isSmallScreen = useGetMedia();

  const projects = props.projects;

  return (
    <section id="projects" className={style.projects}>
      <header className={style.header}>
        <Heading
          size="lg"
          asChild
          sub
          className={`${
            isElementInView ? style.header__animate : "before-scroll"
          }`}
        >
          <h2 ref={projectRef}>
            {isSmallScreen ? "Projetos" : "Meus Projetos"}
          </h2>
        </Heading>
      </header>

      <div className={style.wrapper}>
        {projects.map((project, index) => {
          return (
            <Card
              id={project.id}
              icon={project.icon.url}
              cover={project.cover.url}
              title={project.name}
              key={project.id}
              blur={project.coverblur}
              style={{ animationDelay: `${index * 400}ms` }}
              className={`${
                isElementInView ? style.wrapper__animate : "before-scroll"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
