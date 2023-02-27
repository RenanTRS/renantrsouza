import Image from "next/image";
import avatarImg from "../../assets/avatar.png";

import style from "./Avatar.module.scss";

export function Avatar() {
  return (
    <div className={style.avatar}>
      <Image
        src={avatarImg}
        alt="Uma foto artística do desenvolvedor."
        className={style.avatar__image}
        priority
      />
    </div>
  );
}
