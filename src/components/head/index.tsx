import React from "react";
import Normal from "./normal";
import { HeadColor, HeadShape } from "../../types";

function Head(props: { headColor: HeadColor; headShape: HeadShape }) {
  const { headColor, headShape } = props;

  switch (props.headShape) {
    case "wide":
      return <rect width="64" height="64" rx="32" fill={headColor} />;
    case "thin":
      return <rect width="64" height="64" rx="32" fill={headColor} />;
    default:
      return <Normal />;
  }
}

export default Head;
