import Link from "next/link";
import { Heading } from "../../src/components/Heading";
import { Logo } from "../../src/components/Logo";
import { Text } from "../../src/components/Text";

import style from "./Project.module.scss";

import fakeImg from "./frame13.png";
import { tecnologies } from "../../src/utils/tecnologies";
import Image from "next/image";

const logos = ["reactjs", "typescript", "nextjs", "javascript"];

function project() {
  const imgs = tecnologies.filter((index) => logos.includes(index.name));
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div>
          <Logo size="header" />

          <nav>
            <Link href={"#projects"}>Voltar</Link>
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
            <h2>Hero</h2>
          </Heading>
        </section>
        <section className={style.description}>
          <Heading size="lg" asChild>
            <h2>Descrição:</h2>
          </Heading>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            expedita consectetur asperiores, ad fugiat eius iusto magnam nulla
            tempora ipsum et enim, voluptates sed, consequuntur totam veniam
            optio. Cupiditate, tempore! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Maxime sapiente itaque debitis, iusto ullam
            aliquam adipisci earum id doloremque? Ex omnis vero reiciendis
            beatae ducimus voluptas odit optio sapiente officia?
          </Text>
        </section>

        <section className={style.demo}>
          <Heading size="lg" asChild>
            <h2>Demo:</h2>
          </Heading>

          {/*Gif*/}
        </section>

        <section className={style.tecnologies}>
          <Heading size="lg" asChild>
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
      </main>

      <div>Anchors</div>
    </div>
  );
}

export default project;
