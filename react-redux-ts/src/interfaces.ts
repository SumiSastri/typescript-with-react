import React from 'react'
export type Dispatch = React.Dispatch<IAction>
export interface IEpisode {
  id: number;
  name: string;
  image: { medium: string; original: string };
  number: number;
  season: number;
  summary?: string;
}
export interface IAction {
  type: string;
  payload: Array<IEpisode>;
}
export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}
export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  state: { state: IState; dispatch: Dispatch };
  toggleFave: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode | any
  ) => { IAction };
  favourites: Array<IEpisode>;
}
