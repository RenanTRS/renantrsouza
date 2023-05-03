import Head from "next/head";
import { Header } from "../src/components/Header";
import { Main } from "../src/screens/Main";

import { Roboto } from "@next/font/google";
import { About } from "../src/screens/About";
import { Projects } from "../src/screens/Projects";
import { gql } from "@apollo/client";
import { client } from "../src/lib/apollo";
import { Footer } from "../src/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

const GET_PROJECTS_QUERY = gql`
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
      coverblur
    }
  }
`;

interface Project {
  id: string;
  icon: { url: string };
  name: string;
  cover: { url: string };
  coverblur: string;
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
        <Header />

        <main className="main">
          <div className="container">
            <Main />
            <About />
            <Projects projects={props.projects} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_PROJECTS_QUERY });

  return {
    props: {
      projects: data.projects
    },
    revalidate: 10 //seconds
  };
};
