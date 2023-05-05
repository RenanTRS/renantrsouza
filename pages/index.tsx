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
        <title>Renan Souza</title>
        <meta name="title" content="Renan Souza" />
        <meta
          name="description"
          content="Coletânea dos principais projetos desenvolvidos pelo Front-end Developer Renan Souza"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://renantrsouza.vercel.app`} />
        <meta property="og:title" content="Renan Souza" />
        <meta property="og:site_name" content="Renan Souza" />
        <meta
          property="og:description"
          content="Coletânea dos principais projetos desenvolvidos pelo Front-end Developer Renan Souza"
        />
        <meta property="og:image" content={"/cover_port.png"} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Banner" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://renantrsouza.vercel.app`} />
        <meta property="twitter:title" content="Renan Souza" />
        <meta
          name="twitter:description"
          content="Coletânea dos principais projetos desenvolvidos pelo Front-end Developer Renan Souza"
        />
        <meta
          name="twitter:image"
          content={"https://media.graphassets.com/LpHMDpFPRkmUppw4MPib"}
        />
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
