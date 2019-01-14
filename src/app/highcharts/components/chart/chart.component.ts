import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() title;
  @Input() subtitle;
  @Input() yLabel;
  @Input() data;
  @Input() chartId;
  @Input() type;
  chart;
  chartConfig;

  constructor() {
  }

  ngOnInit() {
    this.setConfigs();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setConfigs() {
    this.chartConfig = {
      chart: {
        type: this.type
      },
      title: {
        text: this.title ? this.title : undefined
      },
      subtitle: {
        text: this.subtitle ? this.subtitle : undefined
      }
    };
  }

  renderChart() {
  }

  resize() {
  }
}
