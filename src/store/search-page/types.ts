import { SET_LOADING_SEARCH_ACTION, SET_SEARCH_TEXT_ACTION } from "./actions"

export type TSearchPageStorage = {
    searchText: string;
    isLoading: boolean;
}

export type TSetSearchTextAction = {
    type: typeof SET_SEARCH_TEXT_ACTION;
    payload: string
}

export type TSetLoadingSearchAction = {
    type: typeof SET_LOADING_SEARCH_ACTION;
    payload: boolean;
}

export type TSearchPageActions = TSetSearchTextAction | TSetLoadingSearchAction;

