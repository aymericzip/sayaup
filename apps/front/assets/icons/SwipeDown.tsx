import { SVGProps } from "react";

export const SwipeDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m.5 6.46l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14"></path>
        <path d="M.5 1.25L6.65 7.4a.5.5 0 0 0 .7 0l6.15-6.15"></path>
      </g>
    </svg>
  );
};
