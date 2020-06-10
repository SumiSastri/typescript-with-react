import { IEpisode, IAction, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  export const toggleFave = (state:IState, dispatch:any, episode: IEpisode | any): IAction => {
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
