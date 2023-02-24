import Image from "next/image";
import avatarImg from "../../assets/avatar.png";
import { Blob } from "../Blob";

import style from "./Avatar.module.scss";

export function Avatar() {
  return (
    <div className={style.avatar}>
      <Blob className={style.blob} />

      <Image
        src={avatarImg}
        alt="Uma foto artística do desenvolvedor."
        className={style.avatar__image}
      />
    </div>
  );
}
