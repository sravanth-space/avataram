import React from "react";
import Confident from "./confident";
import { EyesType } from "../../types";
import Normal from "./normal";
import Happy from "./happy";

export default function Eyes(props: { eyesType: EyesType }) {
  const { eyesType } = props;
  switch (eyesType) {
    case "happy":
      return <Happy />;
    case "normal":
      return <Normal />;
    default:
      return <Confident />;
  }
}
