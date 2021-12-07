import React from "react";
import "./FilmCard.css";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import { TFindResults } from "../../services/TitleService/models";

type TProps = {
  filmInfo: TFindResults;
  }

function FilmCard({filmInfo}: TProps) {

  return (
    <>
      <div className="results-container">
          <div className="film-card">
            <div className="poster-headers">
            {filmInfo?.image && (
              <img src={filmInfo.image.url} alt="poster" className="poster" />
            )}
            <div className="headers-container">
              <h1>{filmInfo.title}</h1>
              <h2>{filmInfo.titleType}</h2>
            </div>
            </div>
            <ul>
              {filmInfo.principals?.map((principal) => (
                <li>{principal.name}</li>
              ))}
            </ul>
          </div>
        
        ;
      </div>
      )
    </>
  );
}

export default FilmCard;
