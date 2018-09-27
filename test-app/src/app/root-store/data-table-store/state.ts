import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DataTable } from '../../models';

export const featureAdapter: EntityAdapter<
DataTable
> = createEntityAdapter<DataTable>({
  selectId: model => model.id,
  sortComparer: (a: DataTable, b: DataTable): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<DataTable> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);