const express = require("express");
// child model gets mergerParams
const reviews = express.Router({mergeParams:true});

const {getSong} = require("../queries/song.js");

//queries
const {
    getAllReviews,
    getReview, 
    createReview, 
    deleteReview, 
    updateReview,
} = require("../queries/reviews");


//Index
reviews.get("/", async (req, res) => {
    const { songs_id } = req.params;
    const allReviews = await getAllReviews(songs_id);
  
    const songs = await getSong(songs_id)
  
    if (allReviews[0]) {
      res.status(200).json({...songs, allReviews});
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

//Show
reviews.get("/:id", async (req, res) => {
    const {songs_id, id} = req.params;
    const review = await getReview(id);
    const songs = await getSong(songs_id);
    
    if (review) {
        res.json ({...songs, review});
    } else {
        res.status(404).json({error: "not found"});
    }
});

//Update
reviews.put("/:id", async (req,res) => {
    const{id, songs_id} = req.params;
    const updatedReview = await updateReview({songs_id, id, ...req.body});
    if (updateReview.id){
        res.status(200).json(updateReview)
    } else {
    res.status(404).json("Review not found");
    }
});

reviews.post("/", async (req, res) => {
    const { songs_id, id } = req.params;
    const review = await newReview({songs_id,...req.body});
    res.status(200).json(review);
  });
  
  
//Delete

reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    if (deletedReview.id) {
      res.status(200).json(deletedReview);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  });

  module.exports = reviews;