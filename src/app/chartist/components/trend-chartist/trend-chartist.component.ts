import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Chartist from 'chartist';
import 'node_modules/chartist-plugin-tooltip/chartist-plugin-tooltip';
import * as moment from 'moment';



@Component({
  selector: 'app-trend-chartist',
  templateUrl: './trend-chartist.component.html',
  styleUrls: ['./trend-chartist.component.scss']
})
export class TrendChartistComponent implements OnInit, OnChanges {
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
        this.chart = new Chartist.Line('#' + this.chartId, this.data, this.options);
        this.chart.on('draw', function (data) {
          if (data.type === 'line') {
            data.element.attr({
              style: 'stroke-width: 2;stroke:#34749F;'
            });
          }
          if (data.type === 'label') {
            data.element.attr({
              style: 'font-weight:800;'
            });
          }
          if (data.type === 'point') {
            data.element.attr({
              style: 'stroke-width: 6px;cursor:pointer;'
            });
          }
        });
      });

    }
  }

  setConfigs() {
    this.options =  {
      axisX: {
        type: Chartist.FixedScaleAxis,
        divisor: 5,
        labelInterpolationFnc: function(value) {
          return moment(value).format('HH:mm');
        }
      },
      plugins: [
        Chartist.plugins.tooltip({
          valueTransform: function (value) {
            return value.split(',')[1];
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
