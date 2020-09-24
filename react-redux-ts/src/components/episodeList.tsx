import React, { Component } from 'react';

import { IEpisode } from '../interfaces/interfaces';

export function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFave, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section
        style={{
          backgroundColor: 'darkOliveGreen',
          border: 'solid 1px white',
        }}
      >
        :
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 4fr)',
            gridTemplateRows: 'auto',
            borderRadius: '5%',
          }}
          key={episode.id}
        >
          <img
            src={episode.image.medium}
            style={{
              borderRadius: '5%',
              height: 'auto',
              width: '100%',
              padding: '5px',
              margin: '5px',
              backgroundColor: 'darkGreen',
              border: 'solid 3px white',
            }}
          />
          <h5
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Caveat',
              padding: '25px',
              margin: '25px',
              backgroundColor: 'darkSlateGrey',
              height: '20%',
              width: 'auto',
              border: 'solid 2px white',
              borderRadius: '5%',
            }}
          >
            {episode.name}
          </h5>
          <button
            style={{
              color: 'white',
              backgroundColor: 'red',
              fontSize: '16px',
              height: '20%',
              fontFamily: 'Caveat',
              width: '80%',
              margin: '50px 5px 25px 5px',
              border: 'solid 2px white',
              borderRadius: '5%',
            }}
            type="button"
            onClick={() => toggleFave(state, dispatch, episode)}
          >
            {favourites.find(
              (favourite: IEpisode) => favourite.id === episode.id
            )
              ? 'Fave - Click to Unfave'
              : 'Unfaved - Click to make Fave'}
          </button>
          <h6
            style={{
              color: 'darkSlateGray',
              fontSize: '15px',
              fontFamily: 'Caveat',
              backgroundColor: 'lightYellow',
              width: '95%',
              height: 'auto',
              margin: '2px 85px 10px 0px',
              borderRadius: '2%',
            }}
          >
            Season{episode.season} Episode{episode.number}
            <hr></hr>
            {episode.summary}
          </h6>
        </div>
      </section>
    );
  });
}
