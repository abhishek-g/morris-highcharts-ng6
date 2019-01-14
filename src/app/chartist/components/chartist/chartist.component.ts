import {Component, OnInit} from '@angular/core';
import {KpiDataService} from '../../../services/kpi-data.service';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit {

  constructor(private service: KpiDataService) {
  }

  prData: any;
  paData: any;
  cufData: any;
  revData: any;
  actData: any;
  radialData: any;
  stackData: any;
  ngOnInit() {
    // Pr Data
    this.service.getCharttistBarData('PR').subscribe( data => {
      this.prData = data;
    });

    // cuf data
    this.service.getCharttistBarData('CUF').subscribe( data => {
      this.cufData = data;
    });

    this.service.getCharttistBarData('PA').subscribe( data => {
      this.paData = data;
    });

    this.service.getCharttistBarData('REV').subscribe( data => {
      this.revData = data;
    });

    this.service.getChartistActivePowerData().subscribe(data => {
      this.actData = data;
    });

    this.service.getRadialDataChartist().subscribe(data => {
      this.radialData = data;
    });

    this.service.getChartistStackedBarData().subscribe(data => {
      this.stackData = data;
    });
  }

}
