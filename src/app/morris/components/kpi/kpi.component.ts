import {Component, Input, OnInit} from '@angular/core';
import {insideProject} from '@angular/cli/utilities/project';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit {

  @Input() ylabel;
  @Input() chartLabel;
  @Input() data;

  chartAreaOptions;

  constructor() {
  }

  ngOnInit() {
    this.chartAreaOptions = {
      xkey: 'x',
      ykeys: ['y'],
      labels: [this.ylabel],
      resize: true,
      barColors: ['#34749F'],
      dateFormat: function (x) {
        const d = new Date(x);
        return d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
      }
    };


  }

}
