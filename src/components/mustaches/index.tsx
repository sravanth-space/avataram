import React from "react";
import Freddy from "./freddy";
import { MustacheType, MustacheColor } from "../../types";
import Horshoe from "./horshoe";
import PencilThin from "./pencilThin";
import PencilThinBeard from "./pencilThinBeard";
export default function Mustache(props: {
  mustacheType: MustacheType;
  mustacheColor: MustacheColor;
}) {
  const { mustacheType, mustacheColor } = props;
  switch (mustacheType) {
    case "hor-shoe":
      return <Horshoe mustacheColor={mustacheColor} />;
    case "pencil-thin":
      return <PencilThin mustacheColor={mustacheColor} />;
    case "pencil-thin-beard":
      return <PencilThinBeard mustacheColor={mustacheColor} />;
    default:
      return <Freddy mustacheColor={mustacheColor} />;
  }
}
