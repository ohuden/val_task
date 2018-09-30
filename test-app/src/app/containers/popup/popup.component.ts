import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PopUpData } from '../../models';

import {
  RootStoreState,
  PopUpStoreActions,
  PopUpStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopUpComponent implements OnInit {
  popup_datas$: Observable<PopUpData[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.popup_datas$ = this.store$.select(
        PopUpStoreSelectors.selectAllPopUpDataItems
    );

    this.error$ = this.store$.select(
      PopUpStoreSelectors.selectPopUpDataError
    );

    this.isLoading$ = this.store$.select(
      PopUpStoreSelectors.selectPopUpDataIsLoading
    );

    this.store$.dispatch(
      new PopUpStoreActions.LoadRequestAction()
    );
  }

}