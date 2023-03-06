import Link from "next/link";
import { useVibrate } from "../../hooks/useVibrate";
import { AnchorHTMLAttributes } from "react";

import style from "./Anchor.module.scss";
import {
  DownloadSimple,
  GlobeHemisphereWest,
  GithubLogo
} from "phosphor-react";

interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: "download" | "linkToWeb" | "linkToGit";
  link?: string;
}

export function Anchor({ type, link, ...props }: Anchor) {
  if (type === "download") {
    return (
      <a
        className={style.anchor}
        href={"/documents/renan_tiago_ribeiro_de_souza.pdf"}
        download
        {...props}
        onClick={() => useVibrate(60)}
      >
        <span className={style.anchor__icon}>
          <DownloadSimple weight="bold" />
        </span>
        Download CV
      </a>
    );
  }

  return (
    <Link
      className={style.anchor}
      href={link!}
      target="_blank"
      onClick={() => useVibrate(60)}
    >
      {type === "linkToWeb" ? (
        <>
          <span className={style.anchor__icon}>
            <GlobeHemisphereWest weight="bold" />
          </span>
          Acesse
        </>
      ) : (
        <>
          <span className={style.anchor__icon}>
            <GithubLogo weight="bold" />
          </span>
          Visite
        </>
      )}
    </Link>
  );
}
