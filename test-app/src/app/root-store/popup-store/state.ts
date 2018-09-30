import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PopUpData } from '../../models';

export const featureAdapter: EntityAdapter<
PopUpData
> = createEntityAdapter<PopUpData>({
  selectId: model => model.id,
  sortComparer: (a: PopUpData, b: PopUpData): number =>
    b.id.toString().localeCompare(a.price)
});

export interface State extends EntityState<PopUpData> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);