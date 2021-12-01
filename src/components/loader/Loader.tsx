import React from 'react';
import './Loader.css'

function Loader() {
  
    return (
        <>
         <div className="overlay">
           <div className="loader">
                <img className="loader-image" src="https://ia.media-imdb.com/images/M/MV5BMTU0MTE4Njg3Nl5BMl5BcG5nXkFtZTgwODY0NjQ2OTE@._V1_.png" alt="loader" />  
           </div>       
        </div>
        </>
    );
  }
  
  export default Loader;
  