import Image from "next/image";
import { Heading } from "../../components/Heading";
import { tecnologies } from "../../utils/tecnologies";

export function Main() {
  const response = [
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

  const logos = tecnologies.filter((index) => response.includes(index.name));

  return (
    <section id="home" className="section">
      {logos.map((logo) => {
        return (
          <Image
            key={logo.name}
            src={logo.source}
            width={40}
            height={40}
            alt={logo.alt}
            priority
          />
        );
      })}
    </section>
  );
}
