import React from "react";
import "./FilmSearchResults.css";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import Loader from "../loader/Loader";
import FilmCard from "../film-card/FilmCard";


function FilmSearchResults() {
  const isLoading = useSelector(
    (state: TRootState) => state.searchPage.isLoading
  );

  const searchResults = useSelector(
    (state: TRootState) => state.searchPage.searchResults
  );

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {searchResults?.results.map((filmInfo) => (
            <FilmCard filmInfo={filmInfo} />
          ))}
      </>
      )}
    </>
  );
}

export default FilmSearchResults;
