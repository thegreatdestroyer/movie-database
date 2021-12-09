import React from "react";
import s from "./FilmCard.module.scss";
import { TFindResults } from "../../services/TitleService/models";

type TProps = {
  filmInfo: TFindResults;
};

function FilmCard({ filmInfo }: TProps) {

  return (
    <>
      <div className={s.FilmCard}>
        <div className={s.FilmCard__card}>
          <div className={s.FilmCard__posterHeaders}>
            {!filmInfo.image?.url ? (
              <div className={s.FilmCard__mockImage} />
            ) : (
              <img
                src={filmInfo.image?.url}
                alt="poster"
                className={s.FilmCard__poster}
              />
            )}
            <div className={s.FilmCard__headersContainer}>
              <span className={s.FilmCard__filmName} title={filmInfo.title}>{filmInfo.title}</span>
              <span className={s.FilmCard__filmType}>{filmInfo.titleType}</span>
            </div>
          </div>
          <ul className={s.FilmCard__actorsList}>
            {filmInfo.principals?.map((principal) => (
              <li key={principal.id}>{principal.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FilmCard;
