import React from 'react';
import './SearchPage.css'

function SearchPage() {
  
    return (
        <>
        <div className="title-background"> 
            <h2 className="title-name">Movie DB</h2>
            </div>
            <form className="form-container">
                <input type="text" placeholder="Введите название фильма" className="film-name-input"></input>
                <button type="submit" className="search-film-button">Поиск</button>
            </form>
        </>
    );
  }
  
  export default SearchPage;
  