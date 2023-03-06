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
          <Logo size="header" />

          <button
            className={style.mobile_header_container__toggle_button}
            onClick={handleShowMobileMenu}
            aria-label="Mostrar menu"
          >
            {!isMenuActive ? (
              <List size={32} weight="bold" />
            ) : (
              <XSquare size={32} weight="bold" />
            )}
          </button>
        </div>

        <nav
          className={`${style.nav} ${isMenuActive ? style.nav__active : ""}`}
        >
          <ul className={style.nav__list}>
            <li>
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Sobre mim
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={style.nav__link}
                onClick={() => useVibrate(45)}
              >
                Meus projetos
              </Link>
            </li>
            <li>
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
