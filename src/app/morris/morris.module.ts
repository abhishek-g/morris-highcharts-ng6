import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KpiComponent} from './components/kpi/kpi.component';
import {TrendComponent} from './components/trend/trend.component';
import {RadialComponent} from './components/radial/radial.component';
import {StackComponent} from './components/stack/stack.component';
import {KpiDataService} from '../services/kpi-data.service';
import {MorrisComponent} from './components/morris/morris.component';
import {MorrisJsModule} from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule, MorrisJsModule
  ],
  declarations: [MorrisComponent, KpiComponent, TrendComponent, RadialComponent, StackComponent],
  providers: [KpiDataService]
})
export class MorrisModule {
}
