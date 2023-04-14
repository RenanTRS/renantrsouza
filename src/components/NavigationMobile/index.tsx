import { useState } from "react";
import { Logo } from "../Logo";
import { List, XSquare } from "phosphor-react";
import { useVibrate } from "../../hooks/useVibrate";
import Link from "next/link";
import { Anchor } from "../Anchor";

import style from "./NavigationMobile.module.scss";

export function NavigationMobile() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
    useVibrate(60);
  };

  const handleRedirect = () => {
    setIsMenuActive(!isMenuActive);
    useVibrate(45);
  };

  return (
    <div className={style.container}>
      <Link href={"#home"}>
        <Logo size="header" aria-label="Logo do site." />
      </Link>

      <button
        className={style.toggle_button}
        onClick={handleShowMobileMenu}
        aria-label={isMenuActive ? "Fechar menu" : "Abrir menu"}
        aria-controls="menu"
        aria-haspopup="true"
        aria-expanded={!isMenuActive ? "false" : "true"}
      >
        {!isMenuActive ? (
          <List size={32} weight="bold" aria-disabled />
        ) : (
          <XSquare size={32} weight="bold" aria-disabled />
        )}
      </button>

      <nav
        className={`${style.nav} ${isMenuActive ? style.nav__active : ""}`}
        id="menu"
      >
        <ul className={style.nav__list} role="menubar">
          <li role="menuitem">
            <Link
              href="#home"
              className={style.nav__link}
              onClick={() => handleRedirect()}
            >
              Home
            </Link>
          </li>
          <li role="menuitem">
            <Link
              href="#about"
              className={style.nav__link}
              onClick={() => handleRedirect()}
            >
              Sobre mim
            </Link>
          </li>
          <li role="menuitem">
            <Link
              href="#projects"
              className={style.nav__link}
              onClick={() => handleRedirect()}
            >
              Meus projetos
            </Link>
          </li>
          <li role="menuitem">
            <Link
              href="#contact"
              className={style.nav__link}
              onClick={() => handleRedirect()}
            >
              Contatos
            </Link>
          </li>
        </ul>

        <div className={style.nav__download}>
          <Anchor type="download" />
        </div>
      </nav>
    </div>
  );
}
