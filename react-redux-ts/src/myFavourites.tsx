import React, { useContext, Suspense, lazy } from "react";

import { Store } from "./store";
import { toggleFave } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = lazy<any>(() =>
  import("./EpisodeList").then((module) => ({ default: module.EpisodeList }))
);
export default function MyFavourites(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFave,
    favourites: state.favourites,
  };
  return (
    <section
      style={{
        margin: "5px",
        padding: "5px",
        display: "flex",
        backgroundColor: "blanchedAlmond",
      }}
    >
      <Suspense fallback={<div>IMAGES LOADING...</div>}>
        <section>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </section>
  );
}
