import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  return (
    <div>
      <Fragment>      
        <h1>Rick & Morty episode picker</h1>
        <p>Pick your fave show</p>
      </Fragment>
    </div>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
