import React from "react";
import { BODY_COLORS, BodyColor } from "../../types";

export default function TShirt(props: { bodyColor: BodyColor }) {
  const { bodyColor } = props;
  return (
    <>
      <g clipPath="url(#clip2_274_4378)">
        <g clipPath="url(#clip3_274_4378)">
          <rect
            x="7"
            y="60"
            width="40"
            height="23"
            rx="9"
            fill={BODY_COLORS[bodyColor].primary}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip2_274_4378">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
}
