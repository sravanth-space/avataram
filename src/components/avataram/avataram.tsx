import { AvataramConfig } from "../../types";
import Background from "../background";
import Body from "../body";
import Eyes from "../eyes";
import Glasses from "../glasses";
import Hair from "../hair";
import Head from "../head";
import Mouth from "../mouth";
import Mustache from "../mustaches";
import React from "react";

export default function Avataram(props: AvataramConfig) {
  const {
    backgroundColor,
    backgroundShape,
    headColor,
    headShape,
    bodyColor,
    bodyShape,
    hairStyle,
    hairColor,
    mouthType,
    eyesType,
    isBlushes,
    mustacheType,
    mustacheColor,
    hasGlasses,
  } = props;

  return (
    <svg
      id="svgRa"
      style={{
        width: "250px",
        height: "100%",
      }}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_274_4378)">
        {/* <!-- Backgroud --> */}
        <Background
          backgroundColor={backgroundColor}
          backgroundShape={backgroundShape}
        />

        {/* <!-- Heads & Neck --> */}
        <Head headColor={headColor} headShape={headShape} />

        {/* <!-- Body/Clothes --> */}
        <Body bodyColor={bodyColor} bodyShape={bodyShape} />

        {/* <!-- Hair --> */}
        <Hair hairStyle={hairStyle} hairColor={hairColor} />

        {/* <!-- Mouth --> */}
        <Mouth mouthType={mouthType} />

        {/* <!-- Eyes --> */}
        <Eyes eyesType={eyesType} isBlushes={isBlushes} />

        {/* <!-- Mustaches --> */}
        <Mustache mustacheType={mustacheType} mustacheColor={mustacheColor} />

        {hasGlasses ? <Glasses /> : <></>}
      </g>

      {/* <defs>
        <clipPath id="clip0_274_4378">
          <rect width="64" height="64" rx="32" />
        </clipPath>
      </defs> */}
    </svg>
  );
}
