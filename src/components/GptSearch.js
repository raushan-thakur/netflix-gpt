import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="background-image" />
      </div>
      <SearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
