import React from "react";

function Background(props) {
  let color;
  switch (props.type) {
    case "purple":
      color = "#6F6FFB";
      break;

    case "rose":
      color = "#FFBAF8";
      break;

    default:
      color = "#6F6FFB";
  }
  return <rect width="64" height="64" rx="32" fill={color} />;
}

export default Background;
