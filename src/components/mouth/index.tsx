import React from "react";
import Normal from "./normal";

export default function Mouth(props) {
  let color;
  switch (props.type) {
    case "wide":
      return <rect width="64" height="64" rx="32" fill={color} />;
    case "thin":
      return <rect width="64" height="64" rx="32" fill={color} />;
    default:
      return <Normal />;
  }
}
