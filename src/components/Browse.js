import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       * MainContainer
       *  VIDEO background
       *  Title
       * SecondaryContainer
       *  MoviesList * N
       *    MovieCard * N
       */}
    </div>
  );
};

export default Browse;
