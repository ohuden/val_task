import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DataTableComponent } from './containers/data-table/data-table.component';
import { PopUpComponent } from "./containers/popup/popup.component";
import { RootStoreModule } from './root-store';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DataTableListComponent } from './components/data-table-list/data-table-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { DataService } from './services';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTableListComponent,
    PopUpComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
