import { TRootState } from "..";

export const selectSearchText = (state: TRootState) => state.searchPage.searchText;

export const selectIsLoading = (state: TRootState) => state.searchPage.isLoading;

export const selectSearchResults = (state: TRootState) => state.searchPage.searchResults;