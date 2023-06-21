import React from "react";
import { BODY_COLORS, BodyColor } from "../../types";

export default function Golf(props: { bodyColor: BodyColor }) {
  const { bodyColor } = props;
  const { primary, shadow } = BODY_COLORS[bodyColor];
  return (
    <>
      <g clip-path="url(#clip2_274_4378)">
        <rect x="7" y="60" width="40" height="23" rx="9" fill={primary} />
        <path
          d="M17 58H36V61C36 61 31 62 26.5 62C22 62 17 61 17 61V58Z"
          fill={primary}
        />
        <path
          d="M17 58H36V60C36 60 33 61.5 26.5 61.5C20 61.5 17 60 17 60V58Z"
          fill={shadow}
        />
        <path
          d="M16.5 59C16.5 57.8954 17.3954 57 18.5 57H34.5C35.6046 57 36.5 57.8954 36.5 59C36.5 59 31.5 60 26.5 60C21.5 60 16.5 59 16.5 59Z"
          fill={primary}
        />
      </g>
      <defs>
        <clipPath id="clip2_274_4378">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
}
