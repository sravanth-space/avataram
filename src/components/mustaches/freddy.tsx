import React from "react";
import { HAIR_COLORS, MustacheColor } from "../../types";

export default function Freddy(props: { mustacheColor: MustacheColor }) {
  const { mustacheColor } = props;
  return (
    <>
      <g clipPath="url(#clip6_274_4378)">
        <g clipPath="url(#clip7_274_4378)">
          <path
            d="M28 46C28 44.3431 29.3431 43 31 43H40C41.6569 43 43 44.3431 43 46H28Z"
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
