import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  @Input() ylabel;
  @Input() chartLabel;
  @Input() data;

  chartTrendOptions;
  constructor() { }

  ngOnInit() {
    this.chartTrendOptions = {
      xkey: 'x',
      ykeys: ['y'],
      labels: [this.ylabel],
      resize: true,
      barColors: ['#34749F']
    };
  }

}
