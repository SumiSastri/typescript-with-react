import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";

import App from "./app";
import { StoreProvider } from "../src/store/store";
import HomePage from "../src/components/homePage";
import MyFavourites from "../src/components/myFavourites";

const root = document.getElementById("app-root");
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<MyFavourites />} path="/my-favourites" />
      </App>
    </Router>
  </StoreProvider>,
  root
);
