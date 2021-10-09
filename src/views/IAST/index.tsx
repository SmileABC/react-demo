import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import Header from "@components/Header";

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Header />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
