import "./App.css";
import React from "react";
// import Purple from "./components/background/purple";
import Background from "./components/background";
import Head from "./components/head";
import Hair from "./components/hair";
import Body from "./components/body";
import Mouth from "./components/mouth";
import Eyes from "./components/eyes";
import Mustache from "./components/mustaches";

function App() {
  return (
    <svg
      style={
        {
          // width: "50%",
          // height: "19%",
          // position: "absolute",
          // top: "23%",
          // right: "23%",
        }
      }
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_274_4378)">
        {/* <!-- Backgroud --> */}
        <Background />

        {/* <!-- Heads --> */}
        <Head />

        {/* <!-- Body --> */}
        <Body />

        {/* <!-- Hair --> */}
        <Hair />

        {/* <!-- Mouth --> */}
        <Mouth />

        {/* <!-- Eyes --> */}
        <Eyes />

        {/* <!-- Mustaches --> */}
        <Mustache />
      </g>

      <defs>
        <clipPath id="clip0_274_4378">
          <rect width="64" height="64" rx="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default App;
