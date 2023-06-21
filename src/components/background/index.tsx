import React from "react";
import {
  BACKGROUND_COLORS,
  BackgroundColor,
  BackgroundShape,
} from "../../types";

function Background(props: {
  backgroundColor: BackgroundColor;
  backgroundShape: BackgroundShape;
}) {
  const { backgroundColor, backgroundShape } = props;

  switch (backgroundShape) {
    case "circle":
      return (
        <>
          <rect
            width="64"
            height="64"
            rx="32"
            fill={BACKGROUND_COLORS[backgroundColor]}
          />
          <defs>
            <clipPath id="clip0_274_4378">
              <rect width="64" height="64" rx="32" />
            </clipPath>
          </defs>
        </>
      );
    case "rounded":
      return (
        <rect
          width="64"
          height="64"
          rx="3"
          fill={BACKGROUND_COLORS[backgroundColor]}
        />
      );

    case "square":
      return (
        <>
          <rect
            width="64"
            height="64"
            fill={BACKGROUND_COLORS[backgroundColor]}
          />
        </>
      );

    default:
      return (
        <rect
          width="64"
          height="64"
          rx="32"
          fill={BACKGROUND_COLORS[backgroundColor]}
        />
      );
  }
}

export default Background;
