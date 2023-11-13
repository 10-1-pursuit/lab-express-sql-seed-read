// Dependencies
const express = require("express");
const { getSong} = require("../queries/song");

// controllers/reviewController.js
const reviews = express.Router({ mergeParams: true });

// Queries
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");





// INDEX
reviews.get("/", async (req, res) => {
  const { songs_id } = req.params;
  try {
    const allReviews = await getAllReviews(songs_id);
    res.json(allReviews);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
reviews.get("/:id", async (req, res) => {
  const { songs_id, id } = req.params;
  const review = await getReview(id);
  const bookmark = await getSong(songs_id);
  if (review) {
    res.json({ ...bookmark, review });
  } else {
    res.status(404).json({ error: "not found" });
  }
});


// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id, songs_id} = req.params;
  console.log(id, req.params.bookmark_id);
  const updatedReview = await updateReview({ songs_id, id, ...req.body });
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});




//POST
reviews.post("/", async (req, res) => {
  const { songs_id } = req.params;
  const review = await newReview({ songs_id, ...req.body });
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer":"Lou",
//      "title": "Fryin Better",
//      "content": "With the great tips and tricks I found here",
//      "bookmark_id": "2",
//      "rating": "4"
// }
module.exports = reviews;
