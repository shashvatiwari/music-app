import React, { useState } from "react";
import axios from "axios";
import "./AddSong.css"; 

const AddSong = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip Hop"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/songs", formData);
      alert("Song added successfully!");
      setFormData({ title: "", artist: "", album: "", genre: "" });
    } catch (error) {
      console.error(error);
      alert("Error adding song");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>🎶 Add a New Song</h1>
        <p>Fill out the details below to expand your music library.</p>
      </div>
      <form onSubmit={handleSubmit} className="song-form">
        <div className="form-group">
          <label htmlFor="title">Song Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the song title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="Enter the artist's name"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="album">Album</label>
          <input
            type="text"
            id="album"
            name="album"
            placeholder="Enter the album name"
            value={formData.album}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSong;
