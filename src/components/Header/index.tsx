import Image from "next/image";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <Image
        src={logoImg}
        alt="Logo do site, com o nome <RenanTRS />"
        priority
        quality={100}
      />

      <nav>
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
