import "./App.css";
import React from "react";
// import ReactNiceAvatar from "./src/index";
import Avatar, { genConfig } from "./src/index";

function App() {
  const config = genConfig();

  return <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />;
}

export default App;
