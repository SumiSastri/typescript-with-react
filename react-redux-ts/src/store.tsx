import React, { useReducer, createContext } from "react";

import { IAction, IState } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favourites: [],
};
export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction) {
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

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
