import {Component, Input, OnInit} from '@angular/core';
import {KpiComponent} from '../kpi/kpi.component';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent extends KpiComponent implements OnInit {
  @Input()barColors;
  chartAreaOptions;

  constructor() {
    super();
  }

  ngOnInit() {
    this.chartAreaOptions = {
      xkey: 'x',
      ykeys: ['y', 'y1', 'y2'],
      labels: this.ylabel,
      resize: true,
      barColors: this.barColors,
      stacked: true,
      dateFormat: function (x) {
        const d = new Date(x);
        return d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
      }
    };
  }

}
