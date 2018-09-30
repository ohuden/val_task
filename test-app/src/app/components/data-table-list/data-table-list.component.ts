import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';

import { DataTable } from '../../models';

@Component({
  selector: 'app-data-table-list',
  templateUrl: './data-table-list.component.html',
  styleUrls: ['./data-table-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DataTableListComponent implements OnInit {

  @Input() datas: DataTable[];
  @Input() loading: boolean;
  @Input() error: any;


  private gridApi;
  private gridColumnApi;
  private rowData: any[];

  private columnDefs;

  constructor() {
    this.columnDefs = [
      {headerName: 'Country', field: 'country', sort: "asc", filter: 'countryColumnFilter' },
      {headerName: 'Quantity', field: 'quantity' },
      {headerName: 'RMC', field: 'rmc',  filter: 'rmcColumnFilter' }
    ];
  }
    
  ngOnInit() {
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });
  }
  onRowClicked(event: any) {
    console.log(event.data.rmc);        
  }
}