import "./App.css";
import React, { useState } from "react";
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
  EYES,
  EyesType,
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
  // MUSTACHE_COLORS,
  MouthType,
  MustacheType,
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

    eyesType: "confident",
    isBlushes: false,

    mustacheType: "freddy",
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

  const [eyesType, setEyesType] = useState<EyesType>(defaultConfig.eyesType);
  const [isBlushes, setIsBlushes] = useState<Boolean>(defaultConfig.isBlushes);

  const [mustacheType, setMustacheType] = useState<MustacheType>(
    defaultConfig.mustacheType
  );
  const [mustacheColor, setMustacheColor] = useState<MustacheColor>(
    defaultConfig.mustacheColor
  );

  const [hasGlasses, setHasGlasses] = useState<Boolean>(
    defaultConfig.hasGlasses
  );

  return (
    <div className="container">
      <header>
        <h1>Avataram</h1>
      </header>

      <div className="main">
        <div>
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
            eyesType={eyesType}
            isBlushes={isBlushes}
            mustacheType={mustacheType}
            mustacheColor={mustacheColor}
            hasGlasses={hasGlasses}
          />
        </div>
        <div>
          <ul>
            <li>
              <label>Background Color:</label>
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
              <label>Background Shape:</label>
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
              <label>Face Color:</label>
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
              <label>Face Shape:</label>
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
              <label>Shirt Color:</label>
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
              <label>Shirt Type:</label>
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
              <label>Hair Style:</label>
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
              <label>Hair Color:</label>
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
              <label>Mouth Type:</label>
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
                value={eyesType}
                title="Eyes"
                onChange={e => {
                  setEyesType(e.target.value as EyesType);
                }}
              >
                {EYES.map((item, idx) => (
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
                value={mustacheType}
                title="Eyes"
                onChange={e => {
                  setMustacheType(e.target.value as MustacheType);
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
              <label>Mustache Color:</label>
              <select
                value={mustacheColor}
                title="MustacheColor"
                onChange={e => {
                  setMustacheColor(e.target.value as MustacheColor);
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
      </div>

      <button onClick={handleDownload}>Download SVG</button>
    </div>
  );
}

export default App;
