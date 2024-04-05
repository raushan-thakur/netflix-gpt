import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { screen } from "@testing-library/react";

const VideoBackground = ({ movieId }) => {
  //const [trailerId, setTrailerId] = useState(null);
  const trailerId = useSelector((store) => store.movies.trailer);
  //console.log("hi",movieId);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
