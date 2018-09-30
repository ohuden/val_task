import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataTable } from '../../models';

@Component({
  selector: 'app-data-table-list',
  templateUrl: './data-table-list.component.html',
  styleUrls: ['./data-table-list.component.css']
})
export class DataTableListComponent implements OnInit {

  @Input() datas: DataTable[];
  @Input() loading: boolean;
  @Input() error: any;
  columnDefs = [
    {headerName: 'Country', field: 'country' },
    {headerName: 'Quantity', field: 'quantity' },
    {headerName: 'RMC', field: 'rmc'}
  ];
  constructor() { }

  ngOnInit() {
  }

}