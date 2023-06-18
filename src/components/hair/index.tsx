import React from "react";
import Classic01 from "./classic01";

function Hair(props) {
  let color;
  switch (props.type) {
    case "wide":
      return <rect width="64" height="64" rx="32" fill={color} />;
    case "thin":
      return <rect width="64" height="64" rx="32" fill={color} />;
    default:
      return <Classic01 />;
  }
}

export default Hair;
