import { createSelector } from "reselect";
import { TRootState } from "..";

export const selectSearchPageStorage = (state: TRootState) => state.searchPage;

export const selectSearchText = (state: TRootState) => state.searchPage.searchText;

export const selectIsLoading = (state: TRootState) => state.searchPage.isLoading;

export const selectSearchResults = (state: TRootState) => state.searchPage.searchResults;

export const selectFilmsResults = createSelector(selectSearchPageStorage, ({searchResults}) => {
    return searchResults?.results.filter((filmInfo) => filmInfo.title);
});