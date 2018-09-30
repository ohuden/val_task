import { Component, OnInit, Input } from '@angular/core';
import {DataTable} from '../../models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  @Input() datas: DataTable;
  constructor() { }

  ngOnInit() {
  }

}
