import React, { Component } from "react";

import IEpisode from "./interfaces";

export function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFave, favourites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div key={episode.id}>
          <img src={episode.image.medium} />
          <h5>{episode.name}</h5>
          <button type="button" onClick={() => toggleFave(episode)}>
            {favourites.find(
              (favourite: IEpisode) => favourite.id === episode.id
            )
              ? "Click to Unfave"
              : "Click to make Fave"}
          </button>
          <h6>
            Season{episode.season} Episode{episode.number}
          </h6>
        </div>
      </section>
    );
  });
}