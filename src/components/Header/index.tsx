import Image from "next/image";
import { List, XSquare } from "phosphor-react";
import { useState } from "react";
import logoImg from "../../assets/logo.svg";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <Image
        src={logoImg}
        alt="Logo do site, com o nome <RenanTRS />"
        priority
        quality={100}
      />

        <button className={style.header__toggle} onClick={handleShowMobileMenu}>
          {!isMenuActive ? (
            <List size={32} weight="bold" />
          ) : (
            <XSquare size={32} weight="bold" />
          )}
        </button>
      </div>
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">Sobre mim</a>
            <a href="#">Meus projetos</a>
            <a href="#">Projetos de cursos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
