import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bar',
        component: BarsComponent,
      },
      {
        path: 'double-bar',
        component: DoubleBarsComponent,
      },
      {
        path: 'donut',
        component: DonutComponent,
      },
      {
        path: 'donut-http',
        component: DonutHttpComponent,
      },
      {
        path: '**',
        redirectTo: 'bar',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
