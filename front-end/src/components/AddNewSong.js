import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNewSong() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/songs", formData);
      navigate("/");

      setFormData({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add New Song</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist:
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="album" className="form-label">
            Album:
          </label>
          <input
            type="text"
            id="album"
            name="album"
            value={formData.album}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={formData.is_favorite}
            onChange={() =>
              setFormData({
                ...formData,
                is_favorite: !formData.is_favorite,
              })
            }
            className="form-check-input"
          />
          <label htmlFor="is_favorite" className="form-check-label">
            Is Favorite
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewSong;
