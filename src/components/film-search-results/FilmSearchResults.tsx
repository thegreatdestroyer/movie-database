import React from "react";
import s from "./FilmSearchResults.module.scss";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import Loader from "../loader/Loader";
import FilmCard from "../film-card/FilmCard";
import { selectIsLoading, selectSearchResults } from "../../store/search-page/selectors";


function FilmSearchResults() {
  const isLoading = useSelector(selectIsLoading);

  const searchResults = useSelector(selectSearchResults);

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
