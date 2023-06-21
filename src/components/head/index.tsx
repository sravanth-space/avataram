import React from "react";
import Normal from "./normal";
import { HeadColor, HeadShape } from "../../types";
import Wide from "./wide";
import Thin from "./thin";

function Head(props: { headColor: HeadColor; headShape: HeadShape }) {
  const { headColor, headShape } = props;

  switch (headShape) {
    case "wide":
      return <Wide headColor={headColor} />;
    case "thin":
      return <Thin headColor={headColor} />;
    default:
      return <Normal headColor={headColor} />;
  }
}

export default Head;
