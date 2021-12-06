import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTextAction } from '../../store/search-page/actions';
import { searchFilmActionThunk } from '../../store/search-page/thunk';
import { FILM_SEARCH_RESULTS } from '../../constants/routes';
import { TRootState } from '../../store';
import { TFindResponse } from '../../services/TitleService/models';
import './FilmSearchResults.css'

function FilmSearchResults() {

  const history = useHistory();
  const dispatch = useDispatch();
  const searchText = useSelector((state: TRootState) =>  state.searchPage.searchText);
  const isLoading = useSelector((state: TRootState) => state.searchPage.isLoading);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTextAction(value));
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

        (dispatch(searchFilmActionThunk(searchText)) as unknown as Promise<TFindResponse>).then(() => {
            dispatch(setSearchTextAction(''));
            history.push(FILM_SEARCH_RESULTS);
        });
  }
    return (
        <>
          <div className="container-results">
                <div className="title-background-results"> 
                    <h2 className="title-name-results">Movie DB</h2>
                </div>
                <form className="form-container-results" onSubmit={handleSearch}>
                    <input name="searchField" type="text" 
                        placeholder="Введите название фильма" 
                        className="film-name-input-result"
                        onChange={handleChange}
                        value={searchText}
                        >
                        </input>
                    <button type="submit" 
                            className="search-film-button-results">Поиск</button>
                </form>
            </div>
        </>
    );
  }
  
  export default FilmSearchResults;
  