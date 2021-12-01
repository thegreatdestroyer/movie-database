import { TFilmImage, TPrincipals, TMeta } from "../../types/common";

export type TFindResults = {
    id: string;
    image: TFilmImage;
    runningTimeInMinutes: number;
    nextEpisode: string;
    numberOfEpisodes: number;
    seriesEndYear: number;
    seriesStartYear: number;
    title: string;
    titleType: string;
    year: number;
    principals: TPrincipals[];
}

export type TFindResponse = {
    results: TFindResults[];
    type: string;
    '@meta': TMeta;
    query: string;
    types: string[]; 
}

