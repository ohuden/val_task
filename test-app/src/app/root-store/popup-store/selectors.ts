import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
          
  import { PopUpData } from '../../models';
  
  import { featureAdapter, State } from './state';
  
  export const getError = (state: State): any => state.error;
  
  export const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const selectPopUpDataState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('popup_data');
  
  export const selectAllPopUpDataItems: (
    state: object
  ) => PopUpData[] = featureAdapter.getSelectors(selectPopUpDataState).selectAll;
  
  export const selectDataById = (id: string) =>
    createSelector(this.selectAllPopUpDataItems, (allData: PopUpData[]) => {
      if (allData) {
        return allData.find(p => p.price == id);
      } else {
        return null;
      }
    });
  
  export const selectPopUpDataError: MemoizedSelector<object, any> = createSelector(
    selectPopUpDataState,
    getError
  );
  
  export const selectPopUpDataIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectPopUpDataState, getIsLoading);