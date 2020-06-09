import React, { Fragment, useContext } from "react";
import {Store} from './store'

export default function App(): JSX.Element {
    const store = useContext(Store)
    console.log(store)
  return (
    <div>
      <Fragment>
        <h1>Rick & Morty episode picker</h1>
        <p>Pick your fave show</p>
      </Fragment>
    </div>
  );
}
