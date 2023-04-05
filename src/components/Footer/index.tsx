import Link from "next/link";
import { Anchor } from "../Anchor";
import { GitLogo } from "../GitLogo";
import { Heading } from "../Heading";
import { LinkedInLogo } from "../LinkedInLogo";
import { Logo } from "../Logo";
import { WhatsAppLogo } from "../WhatsAppLogo";
import style from "./Footer.module.scss";

export function Footer() {
  return (
    <footer id="contact" className={style.footer}>
      <div className={style.container}>
        <div className={style.tag}>
          <Logo size="footer" />

          <Heading size="md" asChild>
            <h3>Renan T. R. Souza</h3>
          </Heading>
        </div>

        <div className={style.contacts}>
          <Heading size="md" asChild>
            <h4>Contatos</h4>
          </Heading>

          <span>renantrsouza@gmail.com</span>

          <div className={style.links}>
            <Link
              href={"https://wa.me/5592982362834"}
              target="_blank"
              aria-label="WhatsApp"
            >
              <WhatsAppLogo />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/renantrsouza/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInLogo />
            </Link>

            <Link
              href={"https://github.com/RenanTRS"}
              target="_blank"
              aria-label="GitHub"
            >
              <GitLogo />
            </Link>
          </div>

          <Anchor type="download" />
        </div>
      </div>

      <span className={style.copy}>&copy; 2023 Renan T. R. de Souza</span>
    </footer>
  );
}
