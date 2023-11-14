import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Show() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/songs/${id}`);
        const data = response.data;
        setSong(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
    console.log("Edit button clicked for song ID:", id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3002/songs/${id}`);

      navigate("/");
    } catch (error) {
      console.error("Error deleting the song:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Song Details</h1>
      <div className="card m-5">
        <div className="card-body text-center">
          <p className="card-text">Title: {song.name}</p>
          <p className="card-text">Artist: {song.artist}</p>
        </div>
      </div>
      <div className="text-center m-3">
        <button className="btn btn-primary me-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Show;
