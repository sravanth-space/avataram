import React from "react";
import { HAIR_COLORS, MustacheColor } from "../../types";

export default function PencilThinBeard(props: {
  mustacheColor: MustacheColor;
}) {
  const { mustacheColor } = props;
  return (
    <>
      <g clipPath="url(#clip6_274_4378)">
        <g clipPath="url(#clip7_274_4378)">
          <path
            d="M26.5 45C26.5 45 31 44.5 37.5 43V45C36 45.6667 32 46.6 30 47C27.5 47.5 26.5 45 26.5 45Z"
            fill={HAIR_COLORS[mustacheColor]}
          />
          <path
            d="M48 44.7558C48 44.7558 44 44 38 43V45C39.4286 45.5853 42.5952 46.1488 44.5 46.5C46.881 46.939 48 44.7558 48 44.7558Z"
            fill="#1B0B47"
          />
          <path
            d="M33.3106 55.2425C33.1528 54.6114 33.6302 54 34.2808 54H37.7192C38.3698 54 38.8472 54.6114 38.6894 55.2425L38.4394 56.2425C38.3281 56.6877 37.9281 57 37.4692 57H34.5308C34.0719 57 33.6719 56.6877 33.5606 56.2425L33.3106 55.2425Z"
            fill="#1B0B47"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip6_274_4378">
          <rect width="64" height="64" rx="32" fill="white" />
        </clipPath>
        <clipPath id="clip7_274_4378">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
}
