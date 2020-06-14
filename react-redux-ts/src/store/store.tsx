import React, { useReducer, createContext } from "react";

import { IState } from "../interfaces/interfaces";
import { reducer } from "../actions-and-reducers/reducers";

const initialState: IState = {
  episodes: [],
  favourites: [],
};
export const Store = createContext<IState | any>(initialState);

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
