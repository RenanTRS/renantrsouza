import { List, XSquare } from "phosphor-react";
import { useState } from "react";
import { Logo } from "../Logo";
import style from "./Header.module.scss";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={style.header}>
      <div className={style.header__mobile_container}>
        <Logo size="header" />

        <button
          className={style.header__toggle}
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

      <nav className={`${style.nav} ${isMenuActive ? style.nav__active : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Meus projetos</a>
          </li>
          <li>
            <a href="#">Projetos de cursos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
