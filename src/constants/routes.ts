import SearchPage from "../components/search-page/SearchPage";
import FilmInfo from "../components/film-info/FilmInfo";
import FilmSearchResults from "../components/film-search-results/FilmSearchResults";
import { RouteProps } from 'react-router'

export const MAIN_PAGE = '';
export const FILM_INFO = '/film-info';
export const FILM_SEARCH_RESULTS = '/film-search-results'

export const ROUTES: RouteProps[] = [
    { path: MAIN_PAGE, component: SearchPage, exact: true},
    { path: FILM_INFO, component: FilmInfo, exact: true},
    { path: FILM_SEARCH_RESULTS, component: FilmSearchResults, exact: true}
];

