import React from "react";
import { HAIR_COLORS, MustacheColor } from "../../types";

export default function Horshoe(props: { mustacheColor: MustacheColor }) {
  const { mustacheColor } = props;
  return (
    <>
      <g clipPath="url(#clip6_274_4378)">
        <g clipPath="url(#clip7_274_4378)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 46C27 44.3431 28.3431 43 30 43H41C42.6569 43 44 44.3431 44 46V57C41.7909 57 40 55.2091 40 53V46H31V53C31 55.2091 29.2091 57 27 57V46Z"
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
