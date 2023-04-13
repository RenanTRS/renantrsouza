import Image from "next/image";
import { Heading } from "../Heading";

import style from "./Card.module.scss";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/router";

interface CardProps {
  id: string;
  icon: string;
  title: string;
  cover: string;
}

export function Card({ id, icon, title, cover }: CardProps) {
  const { push } = useRouter();
  const handlePush = (id: string) => {
    push(`/project/${id}`);
  };

  return (
    <div
      className={style.card}
      data-testid="card"
      araia-description={`Card do projeto ${title}`}
    >
      <div className={style.title}>
        <Image src={icon} alt="Logo do projeto" width={24} height={24} />

        <Heading size="sm" asChild>
          <h2>{title}</h2>
        </Heading>
      </div>

      <div className={style.cover}>
        <Image
          src={cover}
          alt={`Capa do projeto`}
          fill
          sizes="13.375rem"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <button
        type="button"
        className={style.trigger}
        onClick={() => handlePush(id)}
      >
        Acessar <ArrowRight weight="bold" />
      </button>
    </div>
  );
}
