import { Component, OnInit } from '@angular/core';
import {KpiDataService} from '../../../services/kpi-data.service';

@Component({
  selector: 'app-morris',
  templateUrl: './morris.component.html',
  styleUrls: ['./morris.component.scss']
})
export class MorrisComponent implements OnInit {

  title = 'app';
  prData: any[];
  cufData: any[];
  paData: any[];
  revData: any[];
  actData: any[];
  energyData: any[];
  yLabel = ['Export' , 'Import', 'Auxiliary'];
  constructor(private service: KpiDataService) {

  }

  ngOnInit() {
    // Performance Ratio Data
    this.service.getPrData().subscribe(data => {
      this.prData = data;
    });

    this.service.getCufData().subscribe(data => {
      this.cufData = data;
    });

    this.service.getPAData().subscribe(data => {
      this.paData = data;
    });

    this.service.getRevenueData().subscribe(data => {
      this.revData = data;
    });

    this.service.getActivePowerData().subscribe(data => {
      this.actData = data;
    });
    this.service.getEnergyData().subscribe(data => {
      this.energyData = data;
    });
  }
}
