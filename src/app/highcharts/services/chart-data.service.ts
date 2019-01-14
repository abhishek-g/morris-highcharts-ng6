import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class ChartDataService {

  constructor() {
  }

  getPrData(): Observable<any> {
    const data = {categories: [], series: [{name: 'Performance Ratio', data: []}]};
    const x = new Date();
    x.setDate(x.getDate() - 5);
    for (let i = 0; i < 5; i++) {
      x.setDate(x.getDate() + 1);
      data.categories.push((x.getMonth() + 1) + '-' + x.getDate());
      data.series[0].data.push(Math.floor(Math.random() * 100));
    }
    return of(data);
  }

  getCufData(): Observable<any> {
    const data = {categories: [], series: [{name: 'Cuf', data: []}]};
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.categories.push((x.getMonth() + 1) + '-' + x.getDate());
      data.series[0].data.push(Math.floor(Math.random() * 30));
    }
    return of(data);
  }

  getPaData(): Observable<any> {
    const data = {categories: [], series: [{name: 'Availability', data: []}]};
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.categories.push((x.getMonth() + 1) + '-' + x.getDate());
      data.series[0].data.push(Math.floor(Math.random() * 100));
    }
    return of(data);
  }

  getRevenueData(): Observable<any> {
    const data = {categories: [], series: [{name: 'Revenue', data: []}]};
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.categories.push((x.getMonth() + 1) + '-' + x.getDate());
      data.series[0].data.push(Math.floor(Math.random() * 19987));
    }
    return of(data);
  }

  getActivePowerData() {
    const data = {series: [{name: 'Power', data: []}]};
    const x = new Date();
    x.setDate(x.getDate() - 1);
    for (let i = 0; i < 1440; i++) {
      x.setMinutes(x.getMinutes() + 1);
      data.series[0].data.push([x.getTime(), Math.floor(Math.random() * 1999)]);
    }
    return of(data);
  }

  getEnergyData() {

    const data = {
      categories: [], series: [{name: 'Export', data: []},
        {name: 'Import', data: []}, {name: 'Auxiliary', data: []}]
    };
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.series[1].data.push(Math.floor(Math.random() * 1997));
      data.series[2].data.push(Math.floor(Math.random() * 197));
      data.categories.push((x.getMonth() + 1) + '-' + x.getDate());
      data.series[0].data.push(Math.floor(Math.random() * 19987));
    }
    return of(data);

  }

  getRadialData() {
    const data = {
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 63.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 15.90
        }, {
          name: 'Firefox',
          y: 1.85
        }, {
          name: 'Edge',
          y: 6.15
        }, {
          name: 'Safari',
          y: 4.10
        }]
      }]
    };
    return of(data);
  }

  getScatterdata() {
    const data = {series: [{name: 'Test', data: []}]};
    for (let i = 0; i < 1440; i++) {
      data.series[0].data.push([Math.floor(Math.random() * 199), Math.floor(Math.random() * 1999)]);
    }
    return of(data);
  }
}
