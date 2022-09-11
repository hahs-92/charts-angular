import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
    BarChartComponent,
  ],
  imports: [CommonModule, ChartsRoutingModule, NgChartsModule],
})
export class ChartsModule {}
