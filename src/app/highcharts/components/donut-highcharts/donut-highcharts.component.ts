import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut-highcharts',
  templateUrl: './donut-highcharts.component.html',
  styleUrls: ['./donut-highcharts.component.scss']
})
export class DonutHighchartsComponent implements OnInit, OnChanges {
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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: undefined
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
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
        this.chart = Highcharts.chart(this.chartId, this.chartConfig);
      });
    }
  }

}
