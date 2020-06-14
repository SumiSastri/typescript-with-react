import { IAction, IState } from "../interfaces/interfaces";

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAVE":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "UNDO_FAVE":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}
