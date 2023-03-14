import { ReactNode } from "react";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination
} from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

interface SliderProps extends SwiperProps {
  children: ReactNode;
}

export default function Slider({ children, ...props }: SliderProps) {
  return (
    <Swiper
      modules={[A11y, Navigation, Pagination, Autoplay, EffectCoverflow]}
      {...props}
    >
      {children}
    </Swiper>
  );
}
