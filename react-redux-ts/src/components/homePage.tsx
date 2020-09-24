import React, * as react from 'react';

import { Store } from '../store/store';
import { IEpisodeProps } from '../interfaces/interfaces';
import { fetchDataAction, toggleFave } from '../actions-and-reducers/actions';

const EpisodeList = react.lazy<any>(() =>
  import('./EpisodeList').then((module) => ({ default: module.EpisodeList }))
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
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
      }}
    >
      <react.Suspense fallback={<div>LOADING IMAGES</div>}>
        <section>
          <EpisodeList {...props} />
        </section>
      </react.Suspense>
    </section>
  );
}
