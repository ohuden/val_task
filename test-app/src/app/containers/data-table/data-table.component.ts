import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DataTable } from '../../models';

import {
  RootStoreState,
  DataTableStoreActions,
  DataTableStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data$: Observable<DataTable[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.data$ = this.store$.select(
        DataTableStoreSelectors.selectAllDataTableItems
    );

    this.error$ = this.store$.select(
        DataTableStoreSelectors.selectDataTableError
    );

    this.isLoading$ = this.store$.select(
        DataTableStoreSelectors.selectDataTableIsLoading
    );

    this.store$.dispatch(
      new DataTableStoreActions.LoadRequestAction()
    );
  }

}