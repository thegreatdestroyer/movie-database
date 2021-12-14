import React from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import FilmCard from "../film-card/FilmCard";
import { selectFilmsResults, selectIsLoading} from "../../store/search-page/selectors";


function FilmSearchResults() {
  const isLoading = useSelector(selectIsLoading);
  const filmsResults = useSelector(selectFilmsResults);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filmsResults?.map((filmInfo) => (
            <FilmCard key={filmInfo.id} filmInfo={filmInfo} />
          ))}
      </>
      )}
    </>
  );
}

export default FilmSearchResults;
