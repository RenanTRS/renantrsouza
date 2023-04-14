import style from "./Header.module.scss";
import { NavigationMobile } from "../NavigationMobile";
import { NavigationDesktop } from "../NavigationDesktop";
import { useGetMedia } from "../../hooks/useGetMedia";

export function Header() {
  const isLargeScreen = useGetMedia("desktop");

  return (
    <>
      <header className={style.header}>
        {!isLargeScreen && <NavigationMobile />}
        {isLargeScreen && <NavigationDesktop />}
      </header>
    </>
  );
}
