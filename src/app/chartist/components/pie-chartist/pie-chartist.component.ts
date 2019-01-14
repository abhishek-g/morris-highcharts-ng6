import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-pie-chartist',
  templateUrl: './pie-chartist.component.html',
  styleUrls: ['./pie-chartist.component.scss']
})
export class PieChartistComponent implements OnInit,OnChanges {
  @Input() ylabel;
  @Input() chartLabel;
  @Input() data;
  @Input() chartId;
  chart;
  options;
  responsiveOptions;

  constructor() {
  }

  ngOnInit() {
    this.setConfigs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue && changes.data.currentValue.series.length > 0) {
      setTimeout(() => {
        this.chart = new Chartist.Pie('#' + this.chartId, this.data, this.options);
        this.chart.on('draw', function (data) {
          if (data.type === 'label') {
            data.element.attr({
              style: 'font-weight:800;font-size:14px;'
            });
          }

        });
      });

    }
  }

  setConfigs() {
    this.options = {
      showLabel: true,
      labelInterpolationFnc: function(value) {
        return value;
      },
      plugins: [
        Chartist.plugins.tooltip({
          valueTransform: function (value) {
            return value;
          }
        })
      ]
    };
  }

}
