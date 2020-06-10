import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/styles.css"
import { StoreProvider } from "./store";

const root = document.getElementById("app-root");

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root
);
