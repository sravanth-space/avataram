import React from "react";
import { HAIR_COLORS, MustacheColor } from "../../types";

export default function PencilThin(props: { mustacheColor: MustacheColor }) {
  const { mustacheColor } = props;
  return (
    <>
      <g clipPath="url(#clip6_274_4378)">
        <g clipPath="url(#clip7_274_4378)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.5 43C31 44.5 26.5 45 26.5 45C26.5 45 27.5 47.5 30 47C32 46.6 36 45.6667 37.5 45V43ZM38 43C44 44 48 44.7558 48 44.7558C48 44.7558 46.881 46.939 44.5 46.5C44.3967 46.481 44.2897 46.4613 44.1794 46.441C42.2569 46.0876 39.3511 45.5535 38 45V43Z"
            fill={HAIR_COLORS[mustacheColor]}
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
