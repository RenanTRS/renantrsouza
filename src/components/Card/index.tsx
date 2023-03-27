import Image from "next/image";
import { Heading } from "../Heading";
import { Anchor } from "../Anchor";
import { tecnologies } from "../../utils/tecnologies";

import * as Dialog from "@radix-ui/react-dialog";

import { Roboto, Bebas_Neue } from "@next/font/google";

import style from "./Card.module.scss";
import { ArrowRight, XSquare } from "phosphor-react";

interface CardProps {
  icon: string;
  title: string;
  cover: string;
  hero?: string;
  description: string;
  gif?: string;
  logos: Array<string>;
  linkToDeploy: string;
  linkToGit: string;
}

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

export function Card(props: CardProps) {
  const imgs = tecnologies.filter((index) => props.logos.includes(index.name));

  return (
    <div className={style.card}>
      <div className={style.title}>
        <img src={props.icon} alt="Icon from project" />

        <Heading size="sm" asChild>
          <h2>{props.title}</h2>
        </Heading>
      </div>

      <div className={style.cover}>
        <Image
          src={props.cover}
          alt={`${props.title} cover`}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <Dialog.Root>
        <Dialog.Trigger type="button" className={style.trigger}>
          Acessar <ArrowRight weight="bold" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className={style.overlay} />

          <Dialog.Content className={`${style.content} ${roboto.className}`}>
            <Dialog.Close className={style.close}>
              <XSquare weight="bold" size={32} aria-label="fechar" />
            </Dialog.Close>

            <div
              className={style.hero}
              style={{
                backgroundImage: `url(${props.hero})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <Dialog.Title className={bebas.className}>
                {props.title}
              </Dialog.Title>
            </div>

            <Dialog.Description className={style.description}>
              {props.description}
            </Dialog.Description>

            <div className={style.gif}>
              <Image
                src={props.gif!}
                alt="Gif demo on screen desktop"
                className={style.gif}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <div className={style.tecnologies}>
              {imgs.map((img) => (
                <Image
                  src={img.source}
                  alt={img.alt}
                  title={img.name}
                  key={img.name}
                  width={32}
                  height={32}
                />
              ))}
            </div>

            <div className={style.linksToAccess}>
              <Anchor type="linkToWeb" link={props.linkToDeploy} />
              <Anchor type="linkToGit" link={props.linkToGit} />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
