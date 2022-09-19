import React from "react";
import playerContext from "../../context/playerContext";

import "./play-music-buttons.scss";

export default function PlayMusicButtons({
  showMusicPlayButtons,
  song,
  albumCover,
  songName,
  artist,
  albumName,
}) {
  const {
    currentSong,
    nextSong,
    prevSong,
    playing,
    togglePlaying,
    handleEnd,
    songslist,
  } = React.useContext(playerContext);
  const [statevolum, setStateVolum] = React.useState(0.3);

  const audio = React.useRef();
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  return (
    <>
      {showMusicPlayButtons ? (
        <div className="music-player-bar">
          <div className="music-player-bar__info">
            <img src={albumCover} alt="album cover" />
            <div>
              {songName} <br /> {artist} - {albumName}
            </div>
          </div>
          <audio
            id=""
            autoPlay
            onEnded={handleEnd}
            ref={audio}
            src={songslist[currentSong].preview}
            type="audio/mpeg"
            preload="true"
          />
          <div className="musicControls">
            <span className="prev" onClick={prevSong}>
              <i className="fas fa-step-backward"></i>
            </span>

            <span
              className="play"
              onClick={() => {
                togglePlaying();
                toggleAudio();
              }}
            >
              <span className={!playing ? "" : "hide"}>
                <i className="fas fa-play"></i>
              </span>
              <span className={!playing ? "hide" : ""}>
                <i className="fas fa-pause"></i>
              </span>
            </span>

            <span className="next" onClick={nextSong}>
              <i className="fas fa-step-forward"></i>
            </span>
          </div>

          <div className="vlme">
            <span className="volum">
              <i className="fas fa-volume-down"></i>
            </span>
            <input
              value={Math.round(statevolum * 100)}
              type="range"
              name="volBar"
              id="volBar"
              onChange={(e) => handleVolume(e.target.value / 100)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
