import React, { Fragment, useEffect, useContext } from "react";
import { Store } from "./store";

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
    // uncomment log - checks whether data is flowing from the API to the front end
    // console.log(state)
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

  return (
    <div>
      <Fragment>
        <h1>Rick & Morty episode picker</h1>
        <p>Pick your fave show</p>
      </Fragment>
    </div>
  );
}
