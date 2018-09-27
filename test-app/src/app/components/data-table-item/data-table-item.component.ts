import { Component, OnInit, Input } from '@angular/core';
import {DataTable} from '../../models';
@Component({
  selector: 'app-data-table-item',
  templateUrl: './data-table-item.component.html',
  styleUrls: ['./data-table-item.component.css']
})
export class DataTableItemComponent implements OnInit {
  @Input() data: DataTable;
  constructor() { }

  ngOnInit() {
  }

}
