import { createSelector, MemoizedSelector } from '@ngrx/store';
import { DataTableStoreSelectors } from './data-table-store';
import { PopUpStoreSelectors } from './popup-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  DataTableStoreSelectors.selectDataTableError, PopUpStoreSelectors.selectPopUpDataError,
  (DataTableError: string) => {
    return DataTableError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  DataTableStoreSelectors.selectDataTableIsLoading, PopUpStoreSelectors.selectPopUpDataIsLoading,
  (data: boolean) => {
    return data;
  },
)