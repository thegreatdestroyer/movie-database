import { ThunkDispatch } from "redux-thunk"
import { titleService } from '../../services/TitleService'
import { setFoundDataAction, setLoadingSearchAction } from "./actions";


export const searchFilmActionThunk = (searchText: string) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        dispatch(setLoadingSearchAction(true));
        try {
            const response = await titleService.find(searchText);
            dispatch(setFoundDataAction(response));
            console.log(response);
        } catch(error) {
            console.error(error);
        }
        finally {
            dispatch(setLoadingSearchAction(false))
            }
    }
}
