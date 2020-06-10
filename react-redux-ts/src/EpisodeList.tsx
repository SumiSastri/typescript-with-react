import React, { Component } from "react";

import IEpisode from "./interfaces";

export function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFave, favourites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section style={{margin: '5px', padding: '5px', backgroundColor: "black" }} >
        <div
        style={{display: "flex", flexWrap:"wrap", justifyContent: "space-between", margin: '5px', padding: '5px', backgroundColor: "grey" }} 
        key={episode.id}>
          <img src={episode.image.medium} />
          <h5 style={{color: "white", fontSize: '18px' }}>{episode.name}</h5>
          <button style={{backgroundColor: "iceBlue", height: "25px", width: "30vh" }} 
          type="button" onClick={() => toggleFave(episode)}>
            {favourites.find(
              (favourite: IEpisode) => favourite.id === episode.id
            )
              ? "Fave - Click to Unfave"
              : "Unfaved - Click to make Fave"}
          </button>
          <h6 style= {{color: "white", fontSize: '12px' }}>
            Season{episode.season} Episode{episode.number}
            <hr></hr>
            {episode.summary}
          </h6>     
        </div>
      </section>
    );
  });
}