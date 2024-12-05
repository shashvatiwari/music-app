import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ListSongs.css";

const ListSongs = () => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/songs");
        setSongs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="list-container">
      <header className="header">
        <h1>🎵 My Song Library</h1>
        <p>Explore your collection of songs, beautifully displayed.</p>
      </header>

      {songs.length > 0 ? (
        <div className="table-wrapper">
          <table className="song-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song._id}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <p>No songs added yet. Start building your library!</p>
        </div>
      )}

        <button className="submit-button" onClick={() => navigate('/add-song')}>
          Add Song
        </button>
    </div>

    
  );
};

export default ListSongs;
