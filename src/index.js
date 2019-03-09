import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CBGroup from "./cbgroup";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <CBGroup count={4} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
