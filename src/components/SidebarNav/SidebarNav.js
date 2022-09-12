import React from "react";
import FoxbelMusic from "../../images/foxbel-music.png";
import "./sidebarnav.scss";
import { useAuth } from "../../context/auth-context";

export default function SidebarNav() {
  const { user } = useAuth();
  function renderLibreria() {
    return (
      <>
        <h2 className="headline">Mi Librería</h2>
        <ul className="sidebar__nav">
          <li>Recientes</li>
          <li>Artistas</li>
          <li>Álbums</li>
          <li>Canciones</li>
          <li>Estaciones</li>
        </ul>
      </>
    );
  }
  return (
    <div className="sidebar">
      <img src={FoxbelMusic} alt="Foxbel Music Logo" />

      {user ? renderLibreria() : null}

      <h2 className="headline">Playlist</h2>
      <ul className="sidebar__playlist">
        <li>Metal</li>
        <li>Para bailar</li>
        <li>Rock 90s</li>
        <li>Baladas</li>
      </ul>
    </div>
  );
}
