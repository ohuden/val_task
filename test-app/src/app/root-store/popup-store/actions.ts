import { Action } from '@ngrx/store';
import { PopUpData } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[PopUpData] Load Request',
  LOAD_FAILURE = '[PopUpData] Load Failure',
  LOAD_SUCCESS = '[PopUpData] Load Success'
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
  constructor(public payload: { items: PopUpData[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;