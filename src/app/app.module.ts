import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MorrisModule} from './morris/morris.module';
import {ChartistModule} from './chartist/chartist.module';
import {HighchartsModule} from './highcharts/highcharts.module';
import {ChartistComponent} from './chartist/components/chartist/chartist.component';
import {HighchartsComponent} from './highcharts/components/highcharts/highcharts.component';
import {MorrisComponent} from './morris/components/morris/morris.component';
import {KpiDataService} from './services/kpi-data.service';

const routes: Routes = [
  {path: '', component: MorrisComponent},
  {path: 'morris', component: MorrisComponent},
  {path: 'chartist', component: ChartistComponent},
  {path: 'highcharts', component: HighchartsComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), MorrisModule, ChartistModule, HighchartsModule
  ],
  providers: [KpiDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
