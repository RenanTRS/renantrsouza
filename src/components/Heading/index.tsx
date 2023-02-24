import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";
import style from "./Heading.module.scss";
import { Bebas_Neue } from "@next/font/google";

interface HeadingProps {
  size: "lg" | "md" | "sm";
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  sub?: boolean;
}

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export function Heading({
  size = "lg",
  asChild,
  children,
  className,
  sub = false
}: HeadingProps) {
  const Component = asChild ? Slot : "h1";
  return (
    <div className={style.heading}>
      {sub && <span className={style.heading__sub} />}

      <Component
        className={clsx([`${bebasNeue.className}`, className], {
          [style.size__lg]: size === "lg",
          [style.size__md]: size === "md",
          [style.size__sm]: size === "sm"
        })}
      >
        {children}
      </Component>

      {sub && <span className={style.heading__sub} />}
    </div>
  );
}
