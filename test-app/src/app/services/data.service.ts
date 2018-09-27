import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTable } from '../models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getDataTable(): Observable<DataTable[]> {
    return this.http
      .get<any>(
      '../../assets/mock-data/1.json'
      )
      .pipe(map(result => result.value));
  }
 }