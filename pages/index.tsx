import Head from "next/head";
import { Header } from "../src/components/Header";
import { Main } from "../src/screens/Main";

import { Roboto } from "@next/font/google";
import { About } from "../src/screens/About";
import { Projects } from "../src/screens/Projects";
import { gql } from "@apollo/client";
import { client } from "../src/lib/apollo";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

const GET_LESSONS_QUERY = gql`
  query Projects {
    projects {
      id
      icon {
        url
      }
      name
      cover {
        url
      }
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
`;

interface Project {
  id: string;
  icon: { url: string };
  name: string;
  cover: { url: string };
  hero: { url: string };
  description: string;
  gif?: { url: string };
  tecnologies: Array<string>;
  linkDeploy?: string;
  linkGithub: string;
}

export interface HomeProps {
  projects: Project[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Renan T. R. Souza</title>
      </Head>

      <div className={`${roboto.className} body`}>
        <main className="main">
          <Header />

          <div className="container">
            <Main />
            <About />
            <Projects projects={props.projects} />
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_LESSONS_QUERY });

  return {
    props: {
      projects: data.projects
    },
    revalidate: 10 //seconds
  };
};
