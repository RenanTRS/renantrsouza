import Image from "next/image";
import { tecnologies } from "../../utils/tecnologies";
import style from "./Tecnologies.module.scss";

export function Tecnologies() {
  const tecnologyNames = [
    "html",
    "css",
    "styled-components",
    "sass",
    "javascript",
    "typescript",
    "reactjs",
    "vitejs",
    "jest",
    "testing-library",
    "graphql",
    "figma"
  ];

  const logos = tecnologies.filter((index) =>
    tecnologyNames.includes(index.name)
  );

  return (
    <div className={style.image}>
      {logos.map((logo) => {
        return (
          <span className={style.image__container} key={logo.name}>
            <Image
              src={logo.source}
              alt={logo.alt}
              className={style.image__logo}
              width={0}
              height={0}
              priority
            />
          </span>
        );
      })}
    </div>
  );
}
