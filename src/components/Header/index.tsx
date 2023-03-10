import Link from "next/link";
import { List, XSquare } from "phosphor-react";
import { useState } from "react";
import { Anchor } from "../Anchor";
import { Logo } from "../Logo";
import { useVibrate } from "../../hooks/useVibrate";
import style from "./Header.module.scss";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
    useVibrate(60);
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.mobile_header_container}>
          <Logo size="header" aria-label="Logo do site" />

          <button
            className={style.mobile_header_container__toggle_button}
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
        </div>

        <nav
          className={`${style.nav} ${isMenuActive ? style.nav__active : ""}`}
          id="menu"
        >
          <ul className={style.nav__list} role="menubar">
            <li role="menuitem">
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Home
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Sobre mim
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Meus projetos
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Projetos de cursos
              </Link>
            </li>
          </ul>

          <div className={style.nav__download}>
            <Anchor type="download" />
          </div>
        </nav>
      </header>
    </>
  );
}
