import { SVGAttributes } from "react";
import style from "./ScrollDown.module.scss";

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export function ScrollDown(props: Props) {
  return (
    <span className={style.span}>
      <svg
        width={29}
        height={57}
        viewBox="0 0 29 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={style.span__mobile}
      >
        <path
          d="M19.964 14.071v-1.634a2.723 2.723 0 10-5.447 0V3.723a2.723 2.723 0 10-5.446 0V20.24l-2.982-5.174a2.727 2.727 0 00-4.725 2.723C5.804 27.142 8.5 30.41 14.517 30.41A10.893 10.893 0 0025.41 19.518V14.07a2.723 2.723 0 10-5.446 0v0zM27.41 44l-12 12-12-12M27.41 32l-12 12-12-12"
          stroke="#E5E7EB"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        width={38}
        height={87}
        viewBox="0 0 38 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={style.span__desktop}
      >
        <path
          d="M36.5 68.087L19 85.587l-17.5-17.5M36.5 50.587L19 68.087l-17.5-17.5M23.598 1h-9.416C6.902 1 1 6.902 1 14.182v18.832c0 7.28 5.902 13.182 13.182 13.182h9.416c7.28 0 13.182-5.902 13.182-13.182V14.182C36.78 6.902 30.878 1 23.598 1zM1 19.832h35.78M18.89 19.832V1"
          stroke="#E5E7EB"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
