import React from "react";
import "./artist-info-card.scss";

export default function ArtistInfoCard({ coverImg, artist, album, about }) {
  return (
    <div className="info-card">
      <div className="info-card__imagen-container">
        <img src={coverImg} alt="album cover" />
      </div>
      <div className="info-card__info-container">
        <h2 className="info-card__info-container__artist headline">
          {artist} {album}
        </h2>
        <p className="info-card__info-container__followers">
          Lo mejor de {artist} <span>321, 123 seguidores</span>
        </p>
        <p className="info-card__info-container__artist-biography">
          Daft Punk, French musical duo, active in the 1990s and early 21st
          century, whose sonic adventurousness and flair for presentation
          propelled them from the vanguard of electronic dance music.
        </p>
        <div className="info-card__info-container__buttons">
          <button>Reproducir</button>
          <button>Seguir</button>
          <button>...</button>
        </div>
      </div>
    </div>
  );
}
