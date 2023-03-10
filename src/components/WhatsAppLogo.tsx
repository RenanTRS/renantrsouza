import { SVGAttributes } from "react";

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export function WhatsAppLogo(props: Props) {
  return (
    <svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_219_2170)">
        <path
          d="M23.296 19.676c-.396-.199-2.344-1.156-2.706-1.29-.364-.131-.628-.197-.894.2-.263.397-1.023 1.289-1.253 1.553-.23.265-.463.297-.859.1-.396-.2-1.673-.618-3.186-1.967-1.178-1.05-1.974-2.348-2.204-2.745-.231-.396-.025-.61.173-.808.178-.178.397-.463.594-.694.2-.232.264-.397.398-.662.132-.264.066-.495-.034-.694-.1-.198-.891-2.149-1.22-2.942-.324-.772-.65-.667-.893-.68-.23-.011-.495-.014-.76-.014-.264 0-.693.1-1.056.496-.362.396-1.386 1.355-1.386 3.306 0 1.95 1.42 3.833 1.617 4.098.199.264 2.794 4.267 6.77 5.983.945.408 1.682.652 2.258.833.95.303 1.813.26 2.494.158.762-.114 2.345-.959 2.675-1.884.33-.926.33-1.719.23-1.884-.098-.166-.362-.264-.76-.463m-7.227 9.87h-.006a13.16 13.16 0 01-6.707-1.837l-.482-.285-4.988 1.31 1.33-4.865-.312-.498a13.147 13.147 0 01-2.014-7.014C2.89 9.091 8.803 3.18 16.072 3.18c3.52 0 6.83 1.373 9.318 3.864a13.1 13.1 0 013.857 9.325c-.004 7.267-5.916 13.179-13.18 13.179zM27.284 5.152A15.754 15.754 0 0016.067.5C7.327.5.214 7.612.21 16.355c0 2.795.729 5.523 2.117 7.927L.077 32.5l8.406-2.205a15.842 15.842 0 007.577 1.93h.007c8.738 0 15.853-7.113 15.857-15.857a15.76 15.76 0 00-4.64-11.217z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_219_2170">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
