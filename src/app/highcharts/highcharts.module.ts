import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighchartsComponent} from './components/highcharts/highcharts.component';
import {KpiHighchartsComponent} from './components/kpi-highcharts/kpi-highcharts.component';
import {ChartDataService} from './services/chart-data.service';
import { TrendHighchartsComponent } from './components/trend-highcharts/trend-highcharts.component';
import { DonutHighchartsComponent } from './components/donut-highcharts/donut-highcharts.component';
import { StackHighchartsComponent } from './components/stack-highcharts/stack-highcharts.component';
import { GaugeHighchartsComponent } from './components/gauge-highcharts/gauge-highcharts.component';
import { ScatterHighchartsComponent } from './components/scatter-highcharts/scatter-highcharts.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighchartsComponent, KpiHighchartsComponent, TrendHighchartsComponent, DonutHighchartsComponent, StackHighchartsComponent, GaugeHighchartsComponent, ScatterHighchartsComponent, ChartComponent],
  providers: [ChartDataService]
})
export class HighchartsModule {
}
