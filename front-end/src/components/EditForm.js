import React, { useState, useEffect } from "react";
import { useParams, redirect } from "react-router-dom";
import axios from "axios";

function EditForm() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/songs/${id}`);
        const data = response.data;
        setFormData(data);
      } catch (error) {
        console.error("Error fetching data for editing:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3002/songs/${id}`, formData);

      redirect(`/show/${id}`);
    } catch (error) {
      console.error("Error updating the song:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Edit Song</h1>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
