import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-stack-chartist',
  templateUrl: './stack-chartist.component.html',
  styleUrls: ['./stack-chartist.component.scss']
})
export class StackChartistComponent implements OnInit, OnChanges {

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
              style: 'stroke-width: 30px;'
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
      stackBars: true,
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
