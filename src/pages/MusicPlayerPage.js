import React from "react";
import SidebarNav from "../components/SidebarNav/SidebarNav";
import ArtistInfoCard from "../components/ArtistiInfoCard/ArtistInfoCard";
import MusicCard from "../components/MusicCard/MusicCard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import playerContext from "../context/playerContext";
import PlayMusicButtons from "../components/PlayMusicButtons/PlayMusicButtons";
import { FetchAllAlbumsData } from "../services/api-fetch";
import "./music-player-page.scss";

export default function MusicPlayerPage() {
  const [inputValue, setInputValue] = React.useState("");
  const [showMusicPlayButtons, setShowMusicPlayButtons] = React.useState(false);
  const { SetCurrent, currentSong, songslist, songsSet } =
    React.useContext(playerContext);
  const { user } = useAuth();

  React.useEffect(() => {
    FetchAllAlbumsData().then((data) => {
      songsSet(data);
    });
  }, []);
  function handlehowMusicPlayButtons(id) {
    SetCurrent(id);
    setShowMusicPlayButtons((prev) => (prev === false ? true : true));
  }

  function handleChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited");
    if (inputValue.length === 0) {
      FetchAllAlbumsData().then((data) => {
        songsSet(data);
      });
    }
    let matchedSongs = songslist.filter((song) => {
      return song.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    songsSet(matchedSongs);
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
              placeholder="Buscar"
            />
          </form>
          <div className="music-player-player__app__header__session-buttons">
            {user ? (
              <Link to="/account">
                <button>{user.name || "Account"}</button>
              </Link>
            ) : (
              renderButtons()
            )}
          </div>
        </div>
        {songslist[3] ? (
          <ArtistInfoCard
            coverImg={songslist[3].album.cover}
            artist={songslist[3].artist.name}
            album={songslist[3].album.title}
            about={songslist[3].artist.name}
            id={3}
            handlehowMusicPlayButtons={handlehowMusicPlayButtons}
          ></ArtistInfoCard>
        ) : (
          ""
        )}

        <div className="music-player-player__app__songs">
          <h2 className="headline ">Resultados</h2>
          <div className="music-player-player__app__songs__container">
            {songslist.map((song, index) => {
              return (
                <MusicCard
                  id={index}
                  handlehowMusicPlayButtons={handlehowMusicPlayButtons}
                  key={index}
                  coverImg={song.album.cover}
                  artist={song.artist.name}
                  song={song.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      {user ? (
        <PlayMusicButtons
          song={currentSong != null ? songslist[currentSong].preview : ""}
          showMusicPlayButtons={showMusicPlayButtons}
          albumCover={
            currentSong != null ? songslist[currentSong].album.cover : ""
          }
          songName={currentSong != null ? songslist[currentSong].title : ""}
          artist={currentSong != null ? songslist[currentSong].artist.name : ""}
          albumName={
            currentSong != null ? songslist[currentSong].album.title : ""
          }
        ></PlayMusicButtons>
      ) : null}
    </div>
  );
}
