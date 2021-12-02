import React from 'react';
import './FilmSearchResults.css'

function FilmSearchResults() {
  
    return (
        <>
          <div className="container-results">
                <div className="title-background-results"> 
                    <h2 className="title-name-results">Movie DB</h2>
                </div>
                <form className="form-container-results">
                    <input name="searchField" type="text" 
                        placeholder="Введите название фильма" 
                        className="film-name-input-result"
                        // onChange={handleChange}
                        // value={searchText}
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
  