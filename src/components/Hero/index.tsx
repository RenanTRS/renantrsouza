import Link from "next/link";
import Image from "next/image";
import { Anchor } from "../Anchor";
import { GitLogo } from "../GitLogo";
import { Heading } from "../Heading";
import { LinkedInLogo } from "../LinkedInLogo";
import { WhatsAppLogo } from "../WhatsAppLogo";

import style from "./Hero.module.scss";
import avatarImg from "../../assets/avatar.png";

export function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.avatar}>
        <Image
          src={avatarImg}
          alt="Uma foto artística do desenvolvedor."
          width={0}
          height={0}
          priority
        />
      </div>

      <div className={style.title}>
        <Heading size="lg">Renan T. R. Souza</Heading>

        <Heading size="md" asChild>
          <h2>Front-end Developer</h2>
        </Heading>

        <div className={style.links}>
          <Anchor type="download" />
          <Link
            href={"https://web.whatsapp.com/send?phone=5592982362834"}
            target="_blank"
            aria-label="Link para o WhatsApp"
          >
            <WhatsAppLogo aria-disabled />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/renantrsouza/"}
            target="_blank"
            aria-label="Link para o LinkedIn"
          >
            <LinkedInLogo aria-disabled />
          </Link>

          <Link
            href={"https://github.com/RenanTRS"}
            target="_blank"
            aria-label="Link para o GitHub"
          >
            <GitLogo aria-disabled />
          </Link>
        </div>
      </div>
    </div>
  );
}
