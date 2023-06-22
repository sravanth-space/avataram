import React from "react";
import Confident from "./confident";
import { EyesType } from "../../types";
import Normal from "./normal";
import Happy from "./happy";

export default function Eyes(props: {
  eyesType: EyesType;
  isBlushes: Boolean;
}) {
  const { eyesType, isBlushes } = props;
  switch (eyesType) {
    case "happy":
      return <Happy isBlushes={isBlushes} />;
    case "normal":
      return <Normal isBlushes={isBlushes} />;
    default:
      return <Confident isBlushes={isBlushes} />;
  }
}
