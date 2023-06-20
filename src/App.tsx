import "./App.css";
import React from "react";
import Avataram from "./components/avataram/avataram";
import { AvataramConfig } from "./types";

function App() {
  const config: AvataramConfig = {
    backgroundColor: "green",
    backgroundShape: "circle",

    headColor: "white",
    headShape: "normal",

    bodyShape: "golf",
    bodyColor: "blue",

    hairStyle: "curly",
    hairColor: "red",

    mouth: "normal",

    eyes: "confident",
    isBlushes: true,

    mustache: "freddy",
    mustacheColor: "black",

    hasGlasses: false,
  };
  return (
    <div className="container">
      <Avataram {...config} />
      <button
        onClick={() => {
          console.table(config);
        }}
      >
        Download
      </button>
    </div>
  );
}

export default App;
