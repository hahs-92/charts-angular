import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartsServiceService {
  constructor(private http: HttpClient) {}

  getChartData() {
    return this.http.get('http://localhost:3000/charts');
  }

  getDoughnutData() {
    return this.http.get('http://localhost:3000/charts').pipe(
      delay(2000),
      map((data) => {
        const dataSets = Object.values(data);
        const labels = Object.keys(data);

        return { data: dataSets, labels: labels };
      })
    );
  }
}
