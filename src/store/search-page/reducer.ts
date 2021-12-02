import { SET_FOUND_DATA_ACTION, SET_LOADING_SEARCH_ACTION, SET_SEARCH_TEXT_ACTION } from './actions'
import { TSearchPageActions, TSearchPageStorage } from './types'


const initialState: TSearchPageStorage = {
    searchText: '',
    isLoading: false,
    searchResults: null
}


export const searchPageReducer = (state = initialState, action: TSearchPageActions) => {
    switch (action.type) {
        case SET_SEARCH_TEXT_ACTION: {
            return {
                ...state,
                searchText: action.payload
            }
        }

        case SET_LOADING_SEARCH_ACTION: {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case SET_FOUND_DATA_ACTION: {
            return {
                ...state,
                response: action.payload
            }
        }

        default: {
            return state;
        }
    }
}
