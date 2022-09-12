import React from "react";
import SidebarNav from "../components/SidebarNav/SidebarNav";
import ArtistInfoCard from "../components/ArtistiInfoCard/ArtistInfoCard";
import MusicCard from "../components/MusicCard/MusicCard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import "./music-player-page.scss";
import PlayMusicButtons from "../components/PlayMusicButtons/PlayMusicButtons";

export default function MusicPlayerPage() {
  const [inputValue, setInputValue] = React.useState("");
  const [albums, setAlbums] = React.useState([]);
  const [showMusicPlayButtons, setShowMusicPlayButtons] = React.useState(false);

  const { user } = useAuth();

  React.useEffect(() => {
    fetch("http://localhost:4000/api/albums").then((data) =>
      data.json().then((data) => {
        setAlbums(data.body);
      })
    );
  }, []);

  function handlehowMusicPlayButtons(e) {
    e.stopPropagation();

    console.log("Hola", e.target);
    setShowMusicPlayButtons((prev) => !prev);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  function renderButtons() {
    return (
      <>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/sign-in">
          <button>Sign in</button>
        </Link>
      </>
    );
  }
  return (
    <div className="music-player-player">
      <SidebarNav></SidebarNav>
      <div className="music-player-player__app">
        <div className="music-player-player__app__header">
          <form onSubmit={handleSubmit}>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
            ></input>
          </form>
          <div className="music-player-player__app__header__session-buttons">
            {user ? (
              <Link to="/account">
                <button>{user.name}</button>
              </Link>
            ) : (
              renderButtons()
            )}
          </div>
        </div>
        {albums[3] ? (
          <ArtistInfoCard
            coverImg={albums[3].cover}
            artist={albums[3].artist.name}
            album={albums[3].title}
            about={albums[3].artist}
          ></ArtistInfoCard>
        ) : (
          ""
        )}

        <div className="music-player-player__app__songs">
          <h2 className="headline ">Resultados</h2>
          <div className="music-player-player__app__songs__container">
            {albums.map((data, index) => {
              return (
                <MusicCard
                  handlehowMusicPlayButtons={handlehowMusicPlayButtons}
                  key={index}
                  coverImg={data.cover}
                  artist={data.artist.name}
                  song={data.tracks.data[0].title}
                />
              );
            })}
          </div>
        </div>
      </div>
      {user ? (
        <PlayMusicButtons
          showMusicPlayButtons={showMusicPlayButtons}
        ></PlayMusicButtons>
      ) : null}
    </div>
  );
}
