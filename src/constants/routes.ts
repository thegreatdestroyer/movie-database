import SearchPage from "../components/search-page/SearchPage";
import FilmInfo from "../components/film-info/FilmInfo";
import FilmSearchResults from "../components/film-search-results/FilmSearchResults";
import { RouteProps } from 'react-router'

export const mainPage = '/main-page';
export const filmInfo = '/film-info';
export const filmSearchResults = '/film-search-results'

export const ROUTES: RouteProps[] = [
    { path: mainPage, component: SearchPage, exact: true},
    { path: filmInfo, component: FilmInfo, exact: true},
    { path: filmSearchResults, component: FilmSearchResults, exact: true}
];

