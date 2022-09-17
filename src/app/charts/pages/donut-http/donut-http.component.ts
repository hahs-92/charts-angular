import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartsServiceService } from '../../services/charts-service.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css'],
})
export class DonutHttpComponent implements OnInit {
  doughnutChartLabels: string[] = [];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      //{ data: [350, 450, 100], backgroundColor: ['tomato', 'blue', 'salmon'] },
      //{ data: [] },
    ],
  };

  doughnutChartType: ChartType = 'doughnut';

  constructor(private chartService: ChartsServiceService) {}

  ngOnInit(): void {
    this.chartService.getDoughnutData().subscribe({
      error: (err) => {
        console.error('ERROR_CHART :', err);
      },
      next: ({ labels, data }) => {
        this.doughnutChartLabels = labels;

        this.doughnutChartData = {
          labels: labels,
          datasets: [{ data: data }],
        };
      },
    });
  }
}
