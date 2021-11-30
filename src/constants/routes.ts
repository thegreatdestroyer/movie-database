import SearchPage from "../components/search-page/SearchPage";
import FilmInfo from "../components/film-info/FilmInfo";
import FilmSearchResults from "../components/film-search-results/FilmSearchResults";
import { RouteProps } from 'react-router'


export const ROUTES: RouteProps[] = [
    { path: '/main-page', component: SearchPage, exact: true},
    { path: '/film-info', component: FilmInfo, exact: true},
    { path: '/film-search-results', component: FilmSearchResults, exact: true}
];

