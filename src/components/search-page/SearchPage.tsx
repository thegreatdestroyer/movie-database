import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import { TRootState } from '../../store';
import { setSearchTextAction } from '../../store/search-page/actions';
import { searchFilmActionThunk } from '../../store/search-page/thunk';
import './SearchPage.css'
import { useHistory } from 'react-router';

function SearchPage() {
    const history = useHistory();
    const searchText = useSelector((state: TRootState) => {
        return state.searchPage.searchText;
    });

    const isLoading = useSelector((state: TRootState) => {
        return state.searchPage.isLoading;
    });

    const dispatch = useDispatch();

    const handleSearch = (e: any) => {
        e.preventDefault();
        dispatch(searchFilmActionThunk(searchText));
        dispatch(setSearchTextAction(''));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;

        dispatch(setSearchTextAction(searchValue));
    }

    const handleOpenResults = () => {
        history.push("/film-search-results")
    } 
  
    return (
        <>
        {isLoading ? <Loader/> :
            
        (
            <>
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
                        className="search-film-button"
                        onClick={handleOpenResults}>Поиск</button>
            </form>
            </>
    )
            }
            </>
    );
  }
  
  export default SearchPage;
  