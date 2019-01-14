import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartistComponent} from './components/chartist/chartist.component';
import {KpiChartistComponent} from './components/kpi-chartist/kpi-chartist.component';
import {TrendChartistComponent} from './components/trend-chartist/trend-chartist.component';
import {RadialChartistComponent} from './components/radial-chartist/radial-chartist.component';
import {PieChartistComponent} from './components/pie-chartist/pie-chartist.component';
import {StackChartistComponent} from './components/stack-chartist/stack-chartist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartistComponent, KpiChartistComponent, TrendChartistComponent,
    RadialChartistComponent, PieChartistComponent, StackChartistComponent]
})
export class ChartistModule {
}
