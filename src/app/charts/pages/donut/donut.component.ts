import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css'],
})
export class DonutComponent {
  doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: ['tomato', 'blue', 'salmon'] },
      // { data: [50, 150, 120] },
      // { data: [250, 130, 70] },
    ],
  };

  doughnutChartType: ChartType = 'doughnut';
}
