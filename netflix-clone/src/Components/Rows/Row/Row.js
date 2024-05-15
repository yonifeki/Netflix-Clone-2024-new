import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchurl);
        const request = await axios.get(fetchurl);
        // console.log(request)
        setMovie(request.data.result);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchurl]);
};
const handleClick = (movie) => {
  if (trailerurl) {
    setTrailerurl("");
  } else {
    movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
      (url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerurl(urlParams.get("v"));
      }
    );
  }
};

const opts = {
  height: "390",
  width: "100%",
  playervars: {
    autoplay: 1,
  },
};

return (
  <div className="row">
    <h1>{title}</h1>
    <div className="row_poster">
      {movie?.map((movie, index) => (
        <img
          onClick={() => handleClick(movie)}
          key={index}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
          className={'row_poster ${isLargeRow && "row_posterLarge"}'}
        />
      ))}
    </div>
    <div style={{ padding: "40px" }}>
      {trailer && <YouTube videoId={trailerurl} opts={opts} />}
    </div>
  </div>
);

export default Row;
