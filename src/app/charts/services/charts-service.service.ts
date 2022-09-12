import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartsServiceService {
  constructor(private http: HttpClient) {}

  getChartData() {
    return this.http.get('http://localhost:3000/charts');
  }
}
