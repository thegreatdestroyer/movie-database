import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk"
import { titleService } from '../../services/TitleService'
import { setFoundDataAction, setLoadingSearchAction } from "./actions";
import { TSearchPageStorage } from "./types";


export const searchFilmActionThunk = (searchText: string) => {
    return async (dispatch: ThunkDispatch<TSearchPageStorage, {}, Action>) => {
        dispatch(setLoadingSearchAction(true));
        try {
            const response = await titleService.find(searchText);
            dispatch(setFoundDataAction(response));
        } catch(error) {
            console.error(error);
        }
        finally {
            dispatch(setLoadingSearchAction(false))
            }
    }
}
