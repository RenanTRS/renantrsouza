import Image from "next/image";
import { List, XSquare } from "phosphor-react";
import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import style from "./Header.module.scss";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={style.header}>
      <div className={style.header__mobile_container}>
        <Image
          src={logoImg}
          alt="Logo do site, com o nome <RenanTRS />"
          priority
          quality={100}
          className={style.header__img}
        />

        <button className={style.header__toggle} onClick={handleShowMobileMenu}>
          {!isMenuActive ? (
            <List size={32} weight="bold" />
          ) : (
            <XSquare size={32} weight="bold" />
          )}
        </button>
      </div>

      <nav
        className={`${style.header__nav} ${
          isMenuActive && style.header__nav_active
        }`}
      >
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
