import { SVGAttributes } from "react";

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export function LinkedInLogo(props: Props) {
  return (
    <svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_219_2172)">
        <path
          d="M27.263 27.77h-4.739v-7.426c0-1.77-.036-4.05-2.47-4.05-2.47 0-2.847 1.927-2.847 3.92v7.555h-4.739V12.5h4.552v2.081h.061c.636-1.2 2.183-2.466 4.494-2.466 4.801 0 5.689 3.16 5.689 7.273v8.381h-.001zM7.116 10.41a2.75 2.75 0 01-2.75-2.753 2.752 2.752 0 112.75 2.753zm2.376 17.36H4.74V12.5h4.752v15.27zM29.633.5H2.361C1.056.5 0 1.532 0 2.805v27.39C0 31.469 1.056 32.5 2.361 32.5H29.63c1.304 0 2.371-1.03 2.371-2.305V2.805C32 1.532 30.933.5 29.63.5h.003z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_219_2172">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
