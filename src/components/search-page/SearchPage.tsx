import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import { TRootState } from '../../store';
import { setSearchTextAction } from '../../store/search-page/actions';
import { searchFilmActionThunk } from '../../store/search-page/thunk';
import './SearchPage.css'
import { useHistory } from 'react-router';
import { TFindResponse } from '../../services/TitleService/models';
import { FILM_SEARCH_RESULTS } from '../../constants/routes';

function SearchPage() {
    const history = useHistory();
    const searchText = useSelector((state: TRootState) =>  state.searchPage.searchText);

    const isLoading = useSelector((state: TRootState) => state.searchPage.isLoading);

    const dispatch = useDispatch();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (dispatch(searchFilmActionThunk(searchText)) as unknown as Promise<TFindResponse>).then(() => {
            dispatch(setSearchTextAction(''));
            history.push(FILM_SEARCH_RESULTS);
        });
    }

    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {

        dispatch(setSearchTextAction(value));
    }
  
    return (
        <>
        {isLoading ? <Loader/> :
            
        (
            <div className="container">
                <div className="title-background"> 
                    <h2 className="title-name">Movie DB</h2>
                </div>
                <form className="form-container" onSubmit={handleSearch}>
                    <input name="searchField" type="text" 
                        placeholder="Введите название фильма" 
                        className="film-name-input"
                        onChange={handleChange}
                        value={searchText}>
                        </input>
                    <button type="submit" 
                            className="search-film-button">Поиск</button>
                </form>
            </div>
    )
            }
            </>
    );
  }
  
  export default SearchPage;
  