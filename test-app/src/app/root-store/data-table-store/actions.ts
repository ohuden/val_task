import { Action } from '@ngrx/store';
import { DataTable } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[DataTable] Load Request',
  LOAD_FAILURE = '[DataTable] Load Failure',
  LOAD_SUCCESS = '[DataTable] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: DataTable[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;