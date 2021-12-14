import React from "react";
import { generatePath, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTextAction } from "../../store/search-page/actions";
import { searchFilmActionThunk } from "../../store/search-page/thunk";
import { FILM_SEARCH_RESULTS, MAIN_PAGE } from "../../constants/routes";
import { TFindResponse } from "../../services/TitleService/models";
import s from "./Header.module.scss";
import { selectSearchText } from "../../store/search-page/selectors";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTextAction(value));
  };

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

  const onMainTitleClick = () => {
    history.push(MAIN_PAGE);
  };

  return (
    <div className={s.Header}>
      <h2 className={s.Header__title} onClick={onMainTitleClick}>Movie DB</h2>

      <form className={s.Header__form} onSubmit={handleSearch}>
        <input
          name="searchField"
          type="text"
          placeholder="Введите название фильма"
          className={s.Header__input}
          onChange={handleChange}
          value={searchText}
        ></input>

        <button type="submit" className={s.Header__submit} disabled={searchText === ''}>
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Header;
