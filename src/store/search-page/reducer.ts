import { SET_LOADING_SEARCH_ACTION, SET_SEARCH_TEXT_ACTION } from './actions'
import { TSearchPageActions, TSearchPageStorage } from './types'


const initialState: TSearchPageStorage = {
    searchText: '',
    isLoading: false
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

        default: {
            return state;
        }
    }
}
