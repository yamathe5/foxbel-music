import React from "react";
import "./music-card.scss";

export default function MusicCard({ coverImg, artist, song }) {
  return (
    <div className="song-card">
      <div className="song-card__imagen-container">
        <img src={coverImg} alt="album imagen"></img>
      </div>
      <h3 className="song-card__song">{song || "Song"}</h3>
      <p className="song-card__artist">{artist || "Artist"} </p>
    </div>
  );
}
