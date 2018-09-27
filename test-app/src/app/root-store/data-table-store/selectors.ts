import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
          
  import { DataTable } from '../../models';
  
  import { featureAdapter, State } from './state';
  
  export const getError = (state: State): any => state.error;
  
  export const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const selectDataTableState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('data');
  
  export const selectAllDataTableItems: (
    state: object
  ) => DataTable[] = featureAdapter.getSelectors(selectDataTableState).selectAll;
  
  export const selectDataById = (id: string) =>
    createSelector(this.selectAllDataTableItems, (allData: DataTable[]) => {
      if (allData) {
        return allData.find(p => p.id == id);
      } else {
        return null;
      }
    });
  
  export const selectDataTableError: MemoizedSelector<object, any> = createSelector(
    selectDataTableState,
    getError
  );
  
  export const selectDataTableIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectDataTableState, getIsLoading);