import React, * as react from "react";

import { Store } from "../store/store";
import { IEpisodeProps } from "../interfaces/interfaces";
import { fetchDataAction, toggleFave } from "../actions-and-reducers/actions";

const EpisodeList = react.lazy<any>(() =>
  import("./EpisodeList").then((module) => ({ default: module.EpisodeList }))
);
export default function HomePage() {
  const { state, dispatch } = react.useContext(Store);

  react.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
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
        justifyContent: "space-between",
        position: "sticky",
        backgroundColor: "blanchedAlmond",
      }}
    >
      <react.Suspense fallback={<div>IMAGES LOADING...</div>}>
        <section>
          <EpisodeList {...props} />
        </section>
      </react.Suspense>
    </section>
  );
}
