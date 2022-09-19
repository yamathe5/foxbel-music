import { SET_CURRENT_SONG, SET_SONGS_ARRAY } from "./types";

export default function playerReducer(state, action) {
  switch (action.type) {
    case SET_SONGS_ARRAY:
      return {
        ...state,
        songslist: action.data,
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true,
      };

    default:
      return state;
  }
}
