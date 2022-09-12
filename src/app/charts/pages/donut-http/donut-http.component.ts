import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartsServiceService } from '../../services/charts-service.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.css'],
})
export class DonutHttpComponent implements OnInit {
  doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      //{ data: [350, 450, 100], backgroundColor: ['tomato', 'blue', 'salmon'] },
      { data: [] },
    ],
  };

  doughnutChartType: ChartType = 'doughnut';

  constructor(private chartService: ChartsServiceService) {}

  ngOnInit(): void {
    this.chartService.getChartData().subscribe(console.log);
  }
}
