import React from "react";
import Normal from "./normal";
import { MouthType } from "../../types";
import Teeth from "./teeth";

export default function Mouth(props: { mouthType: MouthType }) {
  const { mouthType } = props;
  switch (mouthType) {
    case "teeth":
      return <Teeth></Teeth>;
    default:
      return <Normal />;
  }
}
