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
  //TODO: backgroundShape
  return (
    <rect
      width="64"
      height="64"
      rx="32"
      fill={BACKGROUND_COLORS[backgroundColor]}
    />
  );
}

export default Background;
