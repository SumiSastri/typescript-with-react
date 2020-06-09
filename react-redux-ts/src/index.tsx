import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { StoreProvider } from "./store";

const root = document.getElementById("app-root");

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root
);
