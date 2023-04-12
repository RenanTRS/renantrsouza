import Link from "next/link";
import { Heading } from "../../src/components/Heading";
import { Logo } from "../../src/components/Logo";
import { Text } from "../../src/components/Text";

import style from "./Project.module.scss";

import fakeImg from "./frame13.png";
import { tecnologies } from "../../src/utils/tecnologies";
import Image from "next/image";
import { gql } from "@apollo/client";
import { client } from "../../src/lib/apollo";
import { GetStaticPaths } from "next";
import { Footer } from "../../src/components/Footer";
import { Anchor } from "../../src/components/Anchor";
import { useRouter } from "next/router";
import { Roboto } from "@next/font/google";

type StaticProps = {
  params: { id: string };
};

interface ProjectProps {
  project: {
    name: string;
    hero: { url: string };
    description: string;
    gif?: { url: string };
    tecnologies: Array<string>;
    linkDeploy?: string;
    linkGithub: string;
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
  const { back } = useRouter();

  const imgs = tecnologies.filter((index) =>
    project.tecnologies.includes(index.name)
  );

  console.log(project.name);

  return (
    <div className={`${style.container} ${roboto.className}`}>
      <header className={style.header}>
        <div>
          <Logo size="header" />

          <nav>
            <Link href={"#projects"} onClick={() => back()}>
              Voltar
            </Link>
          </nav>
        </div>
      </header>

      <main className={style.main}>
        <section
          style={{
            backgroundImage: `url(${fakeImg.src})`
          }}
          className={style.hero}
        >
          <Heading size="lg" asChild>
            <h2>{project.name}</h2>
          </Heading>
        </section>

        <section className={style.description}>
          <Heading size="md" asChild>
            <h2>Descrição:</h2>
          </Heading>

          <Text>{project.description}</Text>
        </section>

        {project.gif?.url && (
          <section className={style.demo}>
            <Heading size="md" asChild>
              <h2>Demo:</h2>
            </Heading>

            <Image
              src={project.gif?.url!}
              alt="Project demo on web"
              width={1112}
              height={720}
            />
          </section>
        )}

        <section className={style.tecnologies}>
          <Heading size="md" asChild>
            <h2>Tecnologias:</h2>
          </Heading>

          {imgs.map((img) => (
            <Image
              src={img.source}
              alt={img.alt}
              key={img.name}
              width={40}
              height={40}
            />
          ))}
        </section>

        <section>
          <Heading size="md" asChild>
            <h2>Acesse:</h2>
          </Heading>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default project;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PROJECTS_QUERY });
  const projects = data.projects;

  const paths = projects.map((project: any) => ({
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
          description
          gif {
            url
          }
          tecnologies
          linkDeploy
          linkGithub
        }
      }
    `
  });

  return {
    props: {
      project: data.projects[0]
    }
  };
};
