import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stack-highcharts',
  templateUrl: './stack-highcharts.component.html',
  styleUrls: ['./stack-highcharts.component.scss']
})
export class StackHighchartsComponent implements OnInit, OnChanges {
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
        type: 'column'
      },
      title: {
        text: undefined
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold'
          }
        }
      },
      legend: {
        verticalAlign: 'top',
        align: 'left',
        y: -20
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: []
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue && changes.data.currentValue.series.length > 0) {
      setTimeout(() => {
        const data = changes.data.currentValue;
        this.chartConfig.series = data.series;
        this.chartConfig.xAxis.categories = data.categories;
        this.chart = Highcharts.chart(this.chartId, this.chartConfig);
      });
    }
  }

}
