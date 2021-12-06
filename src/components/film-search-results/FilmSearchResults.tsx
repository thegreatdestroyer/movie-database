import React from "react";
import { useHistory } from "react-router";
import "./FilmSearchResults.css";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import Loader from "../loader/Loader";
import { searchFilmActionThunk } from "../../store/search-page/thunk";

function FilmSearchResults() {
  const history = useHistory();
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
        <div className="results-container">
          {searchResults?.results.map(
            ({
              id,
              image,
              principals,
              runningTimeInMinutes,
              title,
              titleType,
              year,
            }) => {
              console.log(id, image, principals, runningTimeInMinutes, title, titleType, year);
            }
          )}
        </div>
      )}
    </>
  );
}

export default FilmSearchResults;
