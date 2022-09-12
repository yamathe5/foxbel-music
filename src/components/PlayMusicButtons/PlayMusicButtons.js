import React from "react";
import "./play-music-buttons.scss";

export default function PlayMusicButtons({ showMusicPlayButtons }) {
  return (
    <>
      {showMusicPlayButtons ? (
        <div className="music-player-bar">
          <div className="music-player-bar__info">Cancion</div>
          <div className="music-player-bar__play-buttons">buttons</div>
          <div className="music-player-bar__volumen-controls">volumen</div>
        </div>
      ) : null}
    </>
  );
}
