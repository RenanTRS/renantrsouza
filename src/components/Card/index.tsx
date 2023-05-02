import Image from "next/image";
import { Heading } from "../Heading";

import style from "./Card.module.scss";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  icon: string;
  title: string;
  cover: string;
  className: any;
  blur: string;
}

export function Card({
  id,
  icon,
  title,
  cover,
  className,
  blur,
  ...props
}: CardProps) {
  const { push } = useRouter();
  const handlePush = (id: string) => {
    push(`/project/${id}`);
  };

  return (
    <div
      className={`${style.card} ${className}`}
      data-testid="card"
      araia-description={`Card do projeto ${title}`}
      {...props}
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
          placeholder="blur"
          blurDataURL={blur}
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
