import React, { Fragment, useContext } from "react";
import {Store} from './store'

export default function App(): JSX.Element {
    const {state,dispatch} = useContext(Store)
    console.log(state)
  return (
    <div>
      <Fragment>
        <h1>Rick & Morty episode picker</h1>
        <p>Pick your fave show</p>
      </Fragment>
    </div>
  );
}
