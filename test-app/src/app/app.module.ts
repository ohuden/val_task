import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DataTableComponent } from './containers/data-table/data-table.component';

import { RootStoreModule } from './root-store';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DataTableItemComponent } from './components/data-table-item/data-table-item.component';
import { DataTableListComponent } from './components/data-table-list/data-table-list.component';



@NgModule({
  declarations: [
    AppComponent,

    DataTableComponent,

    DataTableItemComponent,
    DataTableListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
