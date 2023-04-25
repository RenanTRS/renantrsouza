import Link from "next/link";
import { Logo } from "../Logo";

import style from "./NavitationDesktop.module.scss";

export function NavigationDesktop() {
  return (
    <div className={style.container}>
      <Link href={"#home"}>
        <Logo size="header" aria-label="Logo do site." />
      </Link>

      <nav className={style.nav} id="menu">
        <ul className={style.nav__list} role="menubar">
          <li role="menuitem" style={{ animationDelay: `${1 * 400}ms` }}>
            <Link href="#home" className={style.nav__link}>
              Home
            </Link>
          </li>
          <li role="menuitem" style={{ animationDelay: `${2 * 400}ms` }}>
            <Link href="#about" className={style.nav__link}>
              Sobre mim
            </Link>
          </li>
          <li role="menuitem" style={{ animationDelay: `${3 * 400}ms` }}>
            <Link href="#projects" className={style.nav__link}>
              Meus projetos
            </Link>
          </li>
          <li role="menuitem" style={{ animationDelay: `${4 * 400}ms` }}>
            <Link href="#contact" className={style.nav__link}>
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
