import React, { Fragment, useEffect, useContext, lazy, Suspense } from "react";
import { Link } from "@reach/router";

import { Store } from "./store";

export default function App(props:any): JSX.Element {
  const { state} = useContext(Store);

  return (
    <Fragment>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "dashed 3px black",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
        <h1>Rick & Morty episode picker</h1>
        <h4>Pick your fave show</h4>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
          padding: "5px",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="my-favourites">My-Favourites</Link>    
      </div>
      {props.children}
    </Fragment>
  );
}
