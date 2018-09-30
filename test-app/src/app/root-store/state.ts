import { DataTableStoreState } from './data-table-store';
import { PopUpStoreState } from './popup-store';

export interface State {
  data: DataTableStoreState.State;
  popup_data: PopUpStoreState.State;
}