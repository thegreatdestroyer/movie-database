import { TFindResponse } from "../../services/TitleService";
import { SET_FOUND_DATA_ACTION, SET_LOADING_SEARCH_ACTION, SET_SEARCH_TEXT_ACTION } from "./actions"

export type TSearchPageStorage = {
    searchText: string;
    isLoading: boolean;
    response: TFindResponse | null;
}

export type TSetSearchTextAction = {
    type: typeof SET_SEARCH_TEXT_ACTION;
    payload: string
}

export type TSetLoadingSearchAction = {
    type: typeof SET_LOADING_SEARCH_ACTION;
    payload: boolean;
}

export type TSetFoundDataAction = {
    type: typeof SET_FOUND_DATA_ACTION;
    payload: TFindResponse
}

export type TSearchPageActions = TSetSearchTextAction | TSetLoadingSearchAction | TSetFoundDataAction;

