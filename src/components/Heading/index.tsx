import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";
import style from "./Heading.module.scss";

interface HeadingProps {
  size: "lg" | "md" | "sm";
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

export function Heading({
  size = "lg",
  asChild,
  children,
  className
}: HeadingProps) {
  const Component = asChild ? Slot : "h1";
  return (
    <Component
      className={clsx([style.heading, className], {
        [style.size__lg]: size === "lg",
        [style.size__md]: size === "md",
        [style.size__sm]: size === "sm"
      })}
    >
      {children}
    </Component>
  );
}
