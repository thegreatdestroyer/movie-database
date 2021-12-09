import React from "react";
import s from "./FilmCard.module.scss";
import { TFindResults } from "../../services/TitleService/models";

type TProps = {
  filmInfo: TFindResults;
  }

function FilmCard({filmInfo}: TProps) {

  return (
    <>
      <div className={s.FilmCard}>
          <div className={s.FilmCard__card}>
            <div className={s.FilmCard__posterHeaders}>
            {filmInfo?.image && (
              <img src={filmInfo.image.url} alt="poster" className={s.FilmCard__poster} />
            )}
            <div className={s.FilmCard__headersContainer}>
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
