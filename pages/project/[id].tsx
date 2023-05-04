import Link from "next/link";
import { Heading } from "../../src/components/Heading";
import { Logo } from "../../src/components/Logo";
import { Text } from "../../src/components/Text";
import { useRouter } from "next/router";

import style from "./Project.module.scss";

import { tecnologies } from "../../src/utils/tecnologies";
import Image from "next/image";
import { gql } from "@apollo/client";
import { client } from "../../src/lib/apollo";
import { GetStaticPaths } from "next";
import { Footer } from "../../src/components/Footer";
import { Anchor } from "../../src/components/Anchor";
import { Roboto } from "@next/font/google";
import { ArrowUUpLeft } from "phosphor-react";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

type StaticProps = {
  params: { id: string };
};
type ProjectId = {
  id: string;
};

interface ProjectProps {
  project: {
    name: string;
    hero: { url: string };
    cover: { url: string };
    description: string;
    gif?: { url: string };
    tecnologies: Array<string>;
    linkDeploy?: string;
    linkGithub: string;
    tagDescription: string;
  };
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

const GET_PROJECTS_QUERY = gql`
  query Projects {
    projects {
      id
    }
  }
`;

function project({ project }: ProjectProps) {
  const router = useRouter();
  const { id } = router.query;

  const imgs = tecnologies.filter((index) =>
    project.tecnologies.includes(index.name)
  );

  const { ref: descriptionRef, inView: isDescriptionInView } = useInView({
    triggerOnce: true,
    threshold: 1
  });
  const { ref: demoRef, inView: isDemoInView } = useInView({
    triggerOnce: true,
    threshold: 1
  });
  const { ref: tecnologiesRef, inView: isTecnologiesView } = useInView({
    triggerOnce: true,
    threshold: 1
  });

  return (
    <>
      <Head>
        <title>Renan Souza | {project.name}</title>
        <meta name="title" content={`Renan Souza | ${project.name}`} />
        <meta name="description" content={project.tagDescription} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://renantrsouza.vercel.app/project/${id}`}
        />
        <meta property="og:title" content={`Renan Souza | ${project.name}`} />
        <meta property="og:description" content={project.tagDescription} />
        <meta
          property="og:site_name"
          content={`Renan Souza | ${project.name}`}
        />
        <meta property="og:image" content={project.cover.url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://renantrsouza.vercel.app/project/${id}`}
        />
        <meta
          property="twitter:title"
          content={`Renan Souza | ${project.name}`}
        />
        <meta property="twitter:description" content={project.tagDescription} />
        <meta property="twitter:image" content={project.cover.url} />
      </Head>
      <div
        className={`${style.container} ${roboto.className} ${style.container__animate}`}
      >
        <header className={style.header}>
          <div>
            <Link href={"/#home"}>
              <Logo size="header" />
            </Link>

            <nav>
              <Link href={"/#projects"}>
                Voltar <ArrowUUpLeft weight="bold" />
              </Link>
            </nav>
          </div>
        </header>

        <main className={style.main}>
          <section
            style={{
              backgroundImage: `url(${project.hero.url})`
            }}
            className={`${style.hero} ${style.hero__animate}`}
          >
            <Heading size="lg" asChild>
              <h2>{project.name}</h2>
            </Heading>
          </section>

          <section className={style.description}>
            <Heading
              size="md"
              asChild
              className={`${
                isDescriptionInView
                  ? style.description__animate_title
                  : "before-scroll"
              }`}
            >
              <h2 ref={descriptionRef}>Descrição:</h2>
            </Heading>

            <Text
              className={`${
                isDescriptionInView
                  ? style.description__animate_text
                  : "before-scroll"
              } ${style.description__text}`}
            >
              {project.description}
            </Text>
          </section>

          {project.gif?.url && (
            <section className={style.demo}>
              <Heading
                size="md"
                asChild
                className={`${
                  isDemoInView ? style.demo__animate : "before-scroll"
                }`}
              >
                <h2 ref={demoRef}>Demo:</h2>
              </Heading>

              <img
                src={project.gif?.url!}
                alt="Project demo on web"
                className={`${style.gif} ${
                  isDemoInView ? style.gif__animate : "before-scroll"
                }`}
              />
            </section>
          )}

          <section className={style.tecnologies}>
            <Heading
              size="md"
              asChild
              className={`${
                isTecnologiesView ? style.tecnologies__animate : "before-scroll"
              }`}
            >
              <h2 ref={tecnologiesRef}>Tecnologias:</h2>
            </Heading>

            <div className={style.img}>
              {imgs.map((img, index) => {
                return (
                  <Image
                    src={img.source}
                    alt={img.alt}
                    key={img.name}
                    width={40}
                    height={40}
                    title={img.name}
                    className={`${
                      isTecnologiesView ? style.img__animate : "before-scroll"
                    }`}
                    style={{ animationDelay: `${index * 400}ms` }}
                  />
                );
              })}
            </div>
          </section>

          <section className={style.links}>
            <Heading size="md" asChild>
              <h2>Acesse:</h2>
            </Heading>

            <div className={style.anchors}>
              <Anchor
                type="linkToGit"
                link={project.linkGithub}
                aria-label="Repositório do projeto"
              />

              {project.linkDeploy && (
                <Anchor
                  type="linkToWeb"
                  link={project.linkDeploy}
                  aria-label="Projeto em produção"
                />
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default project;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PROJECTS_QUERY });
  const projects = data.projects;

  const paths = projects.map((project: ProjectId) => ({
    params: { id: project.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: StaticProps) => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects(where: { id: "${params.id}" }) {
          name
          hero {
            url
          }
          cover {
            url
          }
          description
          gif {
            url
          }
          tecnologies
          linkDeploy
          linkGithub
          tagdescription
        }
      }
    `
  });

  return {
    props: {
      project: data.projects[0]
    },
    revalidate: 10 //seconds
  };
};
