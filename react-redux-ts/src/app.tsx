import React, { Fragment, useEffect, useContext } from "react";
import { Store } from "./store";

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  console.log(state);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    const data = await fetch(URL)
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  console.log(state);
  return (
    <div>
      <Fragment>
        <h1>Rick & Morty episode picker</h1>
        <p>Pick your fave show</p>
      </Fragment>
    </div>
  );
}
