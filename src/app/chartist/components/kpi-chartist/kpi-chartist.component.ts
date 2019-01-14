import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Chartist from 'chartist';
import 'node_modules/chartist-plugin-tooltip/chartist-plugin-tooltip';
import 'node_modules/chartist-plugin-axistitle/dist/chartist-plugin-axistitle';

@Component({
  selector: 'app-kpi-chartist',
  templateUrl: './kpi-chartist.component.html',
  styleUrls: ['./kpi-chartist.component.scss']
})
export class KpiChartistComponent implements OnInit, OnChanges {
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
    if (changes.data.currentValue && changes.data.currentValue.labels.length > 0) {
      setTimeout(() => {
        this.chart = new Chartist.Bar('#' + this.chartId, this.data, this.options, this.responsiveOptions);
        this.chart.on('draw', function (data) {
          if (data.type === 'bar') {
            data.element.attr({
              style: 'stroke-width: 30px;stroke: #34749F'
            });
          }
          if (data.type === 'label') {
            data.element.attr({
              style: 'font-weight:800;'
            });
          }
        });
      });

    }
  }

  setConfigs() {
    this.options = {
      seriesBarDistance: 10,
      plugins: [
        Chartist.plugins.tooltip({
          valueTransform: function (value) {
            return value;
          }
        })
      ]
    };

    this.responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
  }
}
