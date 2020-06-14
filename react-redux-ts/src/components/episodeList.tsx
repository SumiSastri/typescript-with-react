import React, { Component } from "react";

import IEpisode from "../interfaces/interfaces";

export function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFave, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section
        style={{
          margin: "5px",
          padding: "5px",
          backgroundColor: "salmon",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: "5px",
            padding: "5px",
            backgroundColor: "grey",
          }}
          key={episode.id}
        >
          <img
            src={episode.image.medium}
            style={{ borderRadius: "2%", height: "35vh" }}
          />
          <h5
            style={{ color: "white", fontSize: "20px", fontFamily: "Caveat" }}
          >
            {episode.name}
          </h5>
          <button
            style={{
              backgroundColor: "iceBlue",
              color: "navyBlue",
              fontSize: "16px",
              height: "40px",
              fontFamily: "Caveat",
              width: "30vh",
              margin: "5px",
            }}
            type="button"
            onClick={() => toggleFave(state, dispatch, episode)}
          >
            {favourites.find(
              (favourite: IEpisode) => favourite.id === episode.id
            )
              ? "Fave - Click to Unfave"
              : "Unfaved - Click to make Fave"}
          </button>
          <h6
            style={{ color: "white", fontSize: "15px", fontFamily: "Caveat" }}
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
