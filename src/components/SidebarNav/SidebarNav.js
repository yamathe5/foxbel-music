import React from "react";
import FoxbelMusic from "../../images/foxbel-music.png";
import "./sidebarnav.scss";

export default function SidebarNav() {
  return (
    <div className="sidebar">
      <img src={FoxbelMusic} alt="Foxbel Music Logo" />
      <h2 className="headline">Mi Librería</h2>
      <ul className="sidebar__nav">
        <li>Recientes</li>
        <li>Artistas</li>
        <li>Álbums</li>
        <li>Canciones</li>
        <li>Estaciones</li>
      </ul>
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
