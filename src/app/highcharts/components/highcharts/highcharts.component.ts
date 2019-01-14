import {Component, OnInit} from '@angular/core';
import {ChartDataService} from '../../services/chart-data.service';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  constructor(private service: ChartDataService) {
  }

  prData: any;
  cufData: any;
  paData: any;
  revData: any;
  powData: any;
  radialData: any;
  stackData: any;
  scatterData: any;

  ngOnInit() {

    // pr data
    this.service.getPrData().subscribe(data => {
      this.prData = data;
    });

    // cuf data
    this.service.getCufData().subscribe(data => {
      this.cufData = data;
    });

    // pa data
    this.service.getPaData().subscribe(data => {
      this.paData = data;
    });

    // revenue data
    this.service.getRevenueData().subscribe(data => {
      this.revData = data;
    });

    this.service.getActivePowerData().subscribe(data => {
      this.powData = data;
    });

    this.service.getRadialData().subscribe(data => {
      this.radialData = data;
    });

    this.service.getEnergyData().subscribe(data =>{
      this.stackData = data;
    });

    this.service.getScatterdata().subscribe(data => {
      this.scatterData = data;
    });
  }

}
