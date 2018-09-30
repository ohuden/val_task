import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTable, PopUpData } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getDataTable(): Observable<DataTable[]> {
    return this.http.get<DataTable[]>('../../assets/mock-data/1.json')
  };
  getPopUpData(): Observable<PopUpData[]> {
    return this.http.get<PopUpData[]>('../../assets/mock-data/2.json')
  }
}
