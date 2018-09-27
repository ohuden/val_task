import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  DataTableStoreSelectors
} from './data-table-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  DataTableStoreSelectors.selectDataTableError,
  (DataTableError: string) => {
    return DataTableError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  DataTableStoreSelectors.selectDataTableIsLoading,
  (data: boolean) => {
    return data;
  }
);