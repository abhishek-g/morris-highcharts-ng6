import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
@Component({
  selector: 'app-trend-highcharts',
  templateUrl: './trend-highcharts.component.html',
  styleUrls: ['./trend-highcharts.component.scss']
})
export class TrendHighchartsComponent implements OnInit, OnChanges {
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
        type: 'line',
        zoomType: 'x'
      },
      title: {
        text: undefined
      },
      legend: {
        verticalAlign: 'top',
        align: 'left',
        y: -20
      },
      colors: ['#34749F'],
      xAxis: {
        type: 'timeseries',
        crosshair: true,
        labels: {
          formatter : function (x) {
            return moment(x.value).format('HH:mm');
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: this.yLabel
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      }
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
