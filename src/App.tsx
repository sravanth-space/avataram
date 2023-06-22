import "./App.css";
import React, { useEffect, useState } from "react";
import Avataram from "./components/avataram/avataram";
import {
  AvataramConfig,
  BACKGROUND_COLORS,
  BACKGROUND_SHAPES,
  BODY_COLORS,
  BODY_SHAPES,
  BackgroundShape,
  BodyColor,
  BodyShape,
  Eyes,
  HAIR_COLORS,
  HAIR_STYLES,
  HEAD_COLORS,
  HEAD_SHAPES,
  HairColor,
  HairStyle,
  HeadColor,
  HeadShape,
  MOUTH,
  MUSTACHE,
  MUSTACHE_COLORS,
  MouthType,
  Mustache,
  MustacheColor,
} from "./types";
import { BackgroundColor } from "./types";

function App() {
  const defaultConfig: AvataramConfig = {
    backgroundColor: "purple",
    backgroundShape: "rounded",

    headColor: "white",
    headShape: "normal",

    bodyShape: "golf",
    bodyColor: "blue",

    hairStyle: "curly",
    hairColor: "red",

    mouthType: "normal",

    eyes: "confident",
    isBlushes: true,

    mustache: "freddy",
    mustacheColor: "black",

    hasGlasses: false,
  };

  const handleDownload = () => {
    const svgElement = document.getElementById("svgRa");

    const svgString = svgElement!.outerHTML;
    const blob = new Blob([svgString], { type: "image/svg+xml" });

    const svgURL = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = svgURL;
    link.download = "filename.svg";

    link.click();

    URL.revokeObjectURL(svgURL);
  };

  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>(
    defaultConfig.backgroundColor
  );
  const [backgroundShape, setBackgroundShape] = useState<BackgroundShape>(
    defaultConfig.backgroundShape
  );

  const [headColor, setHeadColor] = useState<HeadColor>(
    defaultConfig.headColor
  );
  const [headShape, setHeadShape] = useState<HeadShape>(
    defaultConfig.headShape
  );

  const [bodyShape, setBodyShape] = useState<BodyShape>(
    defaultConfig.bodyShape
  );
  const [bodyColor, setBodyColor] = useState<BodyColor>(
    defaultConfig.bodyColor
  );

  const [hairStyle, setHairStyle] = useState<HairStyle>(
    defaultConfig.hairStyle
  );
  const [hairColor, setHairColor] = useState<HairColor>(
    defaultConfig.hairColor
  );

  const [mouthType, setMouthType] = useState<MouthType>(
    defaultConfig.mouthType
  );

  const [eyes, setEyes] = useState<Eyes>(defaultConfig.eyes);
  const [isBlushes, setIsBlushes] = useState<Boolean>(defaultConfig.isBlushes);

  const [mustache, setMustache] = useState<Mustache>(defaultConfig.mustache);
  const [mustacheColor, setMustacheColor] = useState<MustacheColor>(
    defaultConfig.mustacheColor
  );

  const [hasGlasses, setHasGlasses] = useState<Boolean>(
    defaultConfig.hasGlasses
  );

  return (
    <div className="container">
      <Avataram
        backgroundColor={backgroundColor}
        backgroundShape={backgroundShape}
        headColor={headColor}
        headShape={headShape}
        bodyColor={bodyColor}
        bodyShape={bodyShape}
        hairStyle={hairStyle}
        hairColor={hairColor}
        mouthType={mouthType}
        eyes={eyes}
        isBlushes={isBlushes}
        mustache={mustache}
        mustacheColor={mustacheColor}
        hasGlasses={hasGlasses}
      />
      <button onClick={handleDownload}>Download</button>

      <ul>
        <li>
          <label>BackgroundColor:</label>
          <select
            value={backgroundColor}
            title="BackgroundColor"
            onChange={e => {
              setBackgroundColor(e.target.value as BackgroundColor);
            }}
          >
            {Object.keys(BACKGROUND_COLORS).map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label>BackgroundShape:</label>
          <select
            value={backgroundShape}
            title="BackgroundShape"
            onChange={e => {
              setBackgroundShape(e.target.value as BackgroundShape);
            }}
          >
            {Object.keys(BACKGROUND_SHAPES).map((item, idx) => (
              <option value={BACKGROUND_SHAPES[item]} key={idx}>
                {BACKGROUND_SHAPES[item].toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>HeadColor:</label>
          <select
            value={headColor}
            title="HeadColor"
            onChange={e => {
              setHeadColor(e.target.value as HeadColor);
            }}
          >
            {HEAD_COLORS.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>HeadShape:</label>
          <select
            value={headShape}
            title="HeadShape"
            onChange={e => {
              setHeadShape(e.target.value as HeadShape);
            }}
          >
            {HEAD_SHAPES.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>BodyColor:</label>
          <select
            value={bodyColor}
            title="BodyColor"
            onChange={e => {
              setBodyColor(e.target.value as BodyColor);
            }}
          >
            {Object.keys(BODY_COLORS).map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>BodyShape:</label>
          <select
            value={bodyShape}
            title="BodyShape"
            onChange={e => {
              setBodyShape(e.target.value as BodyShape);
            }}
          >
            {BODY_SHAPES.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>HairStyle:</label>
          <select
            value={hairStyle}
            title="HairStyle"
            onChange={e => {
              setHairStyle(e.target.value as HairStyle);
            }}
          >
            {HAIR_STYLES.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>HairColor:</label>
          <select
            value={hairColor}
            title="HairColor"
            onChange={e => {
              setHairColor(e.target.value as HairColor);
            }}
          >
            {Object.keys(HAIR_COLORS).map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>MouthType:</label>
          <select
            value={mouthType}
            title="Mouth"
            onChange={e => {
              setMouthType(e.target.value as MouthType);
            }}
          >
            {MOUTH.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>Eyes:</label>
          <select
            value={eyes}
            title="Eyes"
            onChange={e => {
              setEyes(e.target.value as Eyes);
            }}
          >
            {MOUTH.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>Blushes:</label>
          <input
            type="checkbox"
            onChange={() => {
              setIsBlushes(!isBlushes);
            }}
          ></input>
        </li>

        <li>
          <label>Mustache:</label>
          <select
            value={mustache}
            title="Eyes"
            onChange={e => {
              setMustache(e.target.value as Mustache);
            }}
          >
            {MUSTACHE.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>MustacheColor:</label>
          <select
            value={mustacheColor}
            title="MustacheColor"
            onChange={e => {
              setMustacheColor(e.target.value as MustacheColor);
            }}
          >
            {MUSTACHE_COLORS.map((item, idx) => (
              <option value={item} key={idx}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label>Glasses:</label>
          <input
            type="checkbox"
            onChange={() => {
              setHasGlasses(!hasGlasses);
            }}
          ></input>
        </li>
      </ul>
    </div>
  );
}

export default App;
