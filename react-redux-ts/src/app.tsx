import React, { Fragment, useEffect, useContext, lazy, Suspense } from "react";

import { Store } from "./store";
import { IEpisode, IAction } from "./interfaces";


const EpisodeList = lazy(() =>
  import('./EpisodeList').then(module => ({ default: module.EpisodeList }))
);

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFave = (episode: IEpisode): IAction => {
    const faveEpisode = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAVE",
      payload: episode,
    };
    if (faveEpisode) {
      const unFaveEpisode = state.favourites.filter(
        (favourite: IEpisode) => favourite.id !== episode.id
      );
      dispatchObj = {
        type: "UNDO_FAVE",
        payload: unFaveEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  const props ={
    episodes: state.episodes,
    toggleFave,
    favourites: state.favourites
  }
  return (
    <Fragment>
      <h1>Rick & Morty episode picker</h1>
      <h4>Pick your fave show</h4>
      <Suspense fallback ={<div>Please wait while the images load, thank you</div>}>
        <section>
      <EpisodeList {...props}/>
      </section>
      </Suspense>
    </Fragment>
  );
}
