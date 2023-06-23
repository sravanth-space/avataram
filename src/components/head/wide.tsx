import React from "react";
import { HeadColor, SKIN_COLORS } from "../../types";

export default function Wide(props: { headColor: HeadColor }) {
  const { headColor } = props;

  const { primary, secondary, shadow } = SKIN_COLORS[headColor];
  return (
    <>
      <g clipPath="url(#clip1_274_4378)">
        <circle cx="18" cy="37" r="5" fill={secondary} />
        <path
          d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z"
          fill={secondary}
        />
        <path
          d="M35 53.8678C35 59.5217 34.1177 58.9864 28.3831 58.9864C22.6484 58.9864 20.0016 54.403 20.0016 48.7491C20.0016 43.0953 19.7839 38 24.4129 38C37.5 38.5 35 48.2139 35 53.8678Z"
          fill={shadow}
        />
        <path
          d="M45.8874 36.0992C45.8874 45.0216 49.5731 55.9932 33.5016 55.9932C17.43 55.9932 17.43 45.0216 17.43 36.0992C15.0016 25.5 15.5015 13 32.0016 13C48.5016 13 45.8874 27.1767 45.8874 36.0992Z"
          fill={primary}
        />
        <rect x="36" y="41" width="3" height="2" rx="1" fill={secondary} />
      </g>
      <defs>
        <clipPath id="clip1_274_4378">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
}
