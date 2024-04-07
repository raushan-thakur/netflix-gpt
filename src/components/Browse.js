import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
