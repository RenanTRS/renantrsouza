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
        <meta name="title" content="Renan T. R. Souza" />
        <meta name="description" content="Portfólio de Renan Souza" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://renantrsouza.vercel.app`} />
        <meta property="og:title" content="Renan T. R. Souza" />
        <meta property="og:description" content="Portfólio de Renan Souza" />
        <meta property="og:image" content={"/cover_port.png"} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://renantrsouza.vercel.app`}
        />
        <meta property="twitter:title" content="Renan T. R. Souza" />
        <meta
          property="twitter:description"
          content="Portfólio de Renan Souza"
        />
        <meta property="twitter:image" content={"/cover_port.png"} />
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
