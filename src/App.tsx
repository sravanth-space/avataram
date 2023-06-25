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
  MouthType,
  MustacheType,
  MustacheColor,
  BackgroundColor,
} from "./types";

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
    link.download =
      crypto.randomUUID() + "_" + new Date().toLocaleDateString() + ".svg";

    link.click();

    URL.revokeObjectURL(svgURL);
  };

  const [state, setState] = useState({ ...defaultConfig });
  const handleClick = (key, val) => {
    setState({
      ...state,
      [key]: val,
    });
  };

  const handleCopy = () => {
    const svgElement = document.getElementById("svgRa");

    const svgString = svgElement!.outerHTML;

    const type = "text/plain";
    const blob = new Blob([svgString], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        alert("Copied to clipboard!");
      },
      () => {
        alert("Failed to copy");
      }
    );
  };

  const {
    backgroundColor,
    backgroundShape,
    headColor,
    headShape,
    bodyShape,
    bodyColor,
    hairStyle,
    hairColor,
    mouthType,
    eyesType,
    isBlushes,
    mustacheType,
    mustacheColor,
    hasGlasses,
  } = state;

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
          <div>
            <button onClick={handleDownload}>Download SVG</button>
            <button onClick={handleCopy}>Copy Code</button>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <label>Background Color:</label>
              <select
                value={backgroundColor}
                title="BackgroundColor"
                onChange={e =>
                  handleClick(
                    "backgroundColor",
                    e.target.value as BackgroundColor
                  )
                }
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
                onChange={e =>
                  handleClick(
                    "backgroundShape",
                    e.target.value as BackgroundShape
                  )
                }
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
                onChange={e =>
                  handleClick("headColor", e.target.value as HeadColor)
                }
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
                onChange={e =>
                  handleClick("headShape", e.target.value as HeadShape)
                }
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
                onChange={e =>
                  handleClick("bodyColor", e.target.value as BodyColor)
                }
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
                onChange={e =>
                  handleClick("bodyShape", e.target.value as BodyShape)
                }
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
                onChange={e =>
                  handleClick("hairStyle", e.target.value as HairStyle)
                }
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
                onChange={e =>
                  handleClick("hairColor", e.target.value as HairColor)
                }
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
                onChange={e =>
                  handleClick("mouthType", e.target.value as MouthType)
                }
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
                onChange={e =>
                  handleClick("eyesType", e.target.value as EyesType)
                }
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
                onChange={e => handleClick("isBlushes", e.target.checked)}
              ></input>
            </li>

            <li>
              <label>Mustache:</label>
              <select
                value={mustacheType}
                title="Eyes"
                onChange={e =>
                  handleClick("mustacheType", e.target.value as MustacheType)
                }
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
                onChange={e =>
                  handleClick("mustacheColor", e.target.value as MustacheColor)
                }
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
                onChange={e =>
                  handleClick("hasGlasses", e.target.checked as Boolean)
                }
              ></input>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
