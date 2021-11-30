import { TActionPayloadType } from "../../types/actionTypes";

export const SET_SEARCH_TEXT_ACTION = 'SET_SEARCH_TEXT_ACTION';

export const setSearchTextAction = (payload: string): TActionPayloadType<string> => {
    return {
        type: SET_SEARCH_TEXT_ACTION,
        payload
    }
}

export const SET_LOADING_SEARCH_ACTION = 'SET_LOADING_SEARCH_ACTION';

export const setLoadingSearchAction = (payload: boolean): TActionPayloadType<boolean> => {
    return {
        type: SET_LOADING_SEARCH_ACTION,
        payload
    }
}
