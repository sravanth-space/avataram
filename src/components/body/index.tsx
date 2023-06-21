import React from "react";
import TShirt from "./t-shirt";
import { BodyColor, BodyShape } from "../../types";
import Golf from "./golf";

function Body(props: { bodyColor: BodyColor; bodyShape: BodyShape }) {
  const { bodyColor, bodyShape } = props;
  switch (bodyShape) {
    case "golf":
      return <Golf bodyColor={bodyColor} />;
    default:
      return <TShirt bodyColor={bodyColor} />;
  }
}

export default Body;
