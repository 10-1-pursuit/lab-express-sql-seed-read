import React from "react";
import { useParams } from "react-router-dom";

function VideoPlayer() {
  const { videoId } = useParams();


//   function getYouTubeVideoId(url) {
//     // Extract video ID from full URL or return the original value if it's already an ID
//     const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
//     return match ? match[1] : url;
//   }
  return (
    <div>
        <h3> Umm, not sure how to make this work again </h3>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
     
    </div>
  );
}

export default VideoPlayer;