import Image from "next/image";
import { tecnologies } from "../../utils/tecnologies";
import style from "./Tecnologies.module.scss";

interface Props {
  className?: any;
}
export function Tecnologies(props: Props) {
  const iconNames = [
    "html",
    "css",
    "styledComponents",
    "sass",
    "javascript",
    "typescript",
    "reactjs",
    "vitejs",
    "jest",
    "testingLibrary",
    "graphql",
    "figma"
  ];

  const logos = tecnologies.filter((index) => iconNames.includes(index.name));

  return (
    <>
      {logos.map((logo) => {
        return (
          <Image
            src={logo.source}
            alt={logo.alt}
            className={props.className}
            width={40}
            height={40}
            priority
            key={logo.name}
            data-testid="tecnologies-logo"
          />
        );
      })}
    </>
  );
}
