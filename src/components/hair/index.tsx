import React from "react";
import Classic01 from "./classic01";
import { HairColor, HairStyle } from "../../types";
import Classic02 from "./classic02";
import Curly from "./curly";

function Hair(props: { hairStyle: HairStyle; hairColor: HairColor }) {
  const { hairStyle, hairColor } = props;
  switch (hairStyle) {
    case "curly":
      return <Curly hairColor={hairColor} />;
    case "classic_2":
      return <Classic02 hairColor={hairColor} />;
    default:
      return <Classic01 hairColor={hairColor} />;
  }
}

export default Hair;
