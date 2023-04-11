import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import RouterContext from "./Router-Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterContext/>
  </React.StrictMode>
);
