import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { setSearchTextAction } from "../../store/search-page/actions";
import { searchFilmActionThunk } from "../../store/search-page/thunk";
import s from "./SearchPage.module.scss";
import { generatePath, useHistory } from "react-router";
import { TFindResponse } from "../../services/TitleService/models";
import { FILM_SEARCH_RESULTS } from "../../constants/routes";
import { selectIsLoading, selectSearchText } from "../../store/search-page/selectors";

function SearchPage() {
  const history = useHistory();
  const searchText = useSelector(selectSearchText);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (
      dispatch(
        searchFilmActionThunk(searchText)
      ) as unknown as Promise<TFindResponse>
    ).then(() => {
      const path = generatePath(FILM_SEARCH_RESULTS, {filmName: searchText});
      dispatch(setSearchTextAction(""));
      history.push(path);
    });
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTextAction(value));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.SearchPage}>
          <div className={s.SearchPage__titleBackground}>
            <h2 className={s.SearchPage__titleName}>Movie DB</h2>
          </div>
          <form className={s.SearchPage__formContainer} onSubmit={handleSearch}>
            <input
              name="searchField"
              type="text"
              placeholder="Введите название фильма"
              className={s.SearchPage__filmNameInput}
              onChange={handleChange}
              value={searchText}
            ></input>
            <button type="submit" className={s.SearchPage__searchFilmButton} disabled={searchText === ''}>
              Поиск
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SearchPage;
