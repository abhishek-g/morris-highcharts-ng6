import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-scatter-highcharts',
  templateUrl: './scatter-highcharts.component.html',
  styleUrls: ['./scatter-highcharts.component.scss']
})
export class ScatterHighchartsComponent implements OnInit, OnChanges {
  @Input() yLabel;
  @Input() data;
  @Input() chartId;
  chart;
  chartConfig;

  constructor() {
  }

  ngOnInit() {
    this.chartConfig = {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: undefined
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Height (cm)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'Weight (kg)'
        }
      },
      legend: {
        verticalAlign: 'top',
        align: 'left',
        y: -20
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
          }
        }
      },
      series: []
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue && changes.data.currentValue.series.length > 0) {
      setTimeout(() => {
        this.chartConfig.series = changes.data.currentValue.series;
        this.chart = Highcharts.chart(this.chartId, this.chartConfig);
      });
    }
  }

}
