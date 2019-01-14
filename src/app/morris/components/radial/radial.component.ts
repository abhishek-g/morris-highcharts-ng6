import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss']
})
export class RadialComponent implements OnInit {
  @Input()chartLabel;
  @Input() data;

  chartDonutData;
  chartDonutOptions;

  constructor() { }

  ngOnInit() {
    this.chartDonutData = [
      {label: 'Download Sales', value: 30},
      {label: 'In-Store Sales', value: 20},
      {label: 'Mail-Order Sales', value: 10}
    ];

    this.chartDonutOptions = {
      resize: true,
      colors: ['#EF9B0F', '#FFD800', '#FFFACD']
    };
  }

}
