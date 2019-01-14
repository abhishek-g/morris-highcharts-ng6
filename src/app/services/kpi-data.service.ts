import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class KpiDataService {

  constructor() {
  }

  getPrData() {
    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 5);
    for (let i = 0; i < 5; i++) {
      x.setDate(x.getDate() + 1);
      data.push({
        x: (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
        y: Math.floor(Math.random() * 100)
      });
    }

    return of(data);
  }

  getCufData() {
    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.push({
        x: (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
        y: Math.floor(Math.random() * 38)
      });
    }

    return of(data);
  }

  getPAData() {
    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.push({
        x: (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
        y: Math.floor(Math.random() * 100)
      });
    }

    return of(data);
  }

  getRevenueData() {
    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.push({
        x: (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
        y: Math.floor(Math.random() * 19999999)
      });
    }

    return of(data);
  }

  getActivePowerData() {
    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 1);
    for (let i = 0; i < 144; i++) {
      x.setMinutes(x.getMinutes() + 1);
      const date = (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear() + ' ' + x.getHours() + ':' +
        x.getMinutes() + ':' + x.getSeconds();
      data.push({
        x: date,
        y: Math.floor(Math.random() * 199)
      });
    }
    return of(data);
  }

  getEnergyData() {

    const data = [];
    const x = new Date();
    x.setDate(x.getDate() - 7);
    for (let i = 0; i < 7; i++) {
      x.setDate(x.getDate() + 1);
      data.push({
        x: (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
        y1: Math.floor(Math.random() * 199),
        y: Math.floor(Math.random() * 1999),
        y2: Math.floor(Math.random() * 599)
      });
    }
    return of(data);
  }

  getCharttistBarData(widget) {
    const data = {labels: [], series: [[]]};
    const x = new Date();
    x.setDate(x.getDate() - 5);
    let factor;
    switch (widget) {
      case 'PR' :
        factor = 100;
        break;
      case 'CUF' :
        factor = 40;
        break;
      case 'PA' :
        factor = 100;
        break;
      case 'REV' :
        factor = 19999;
        break;
      default :
        factor = 100;
    }
    for (let i = 0; i < 5; i++) {
      x.setDate(x.getDate() + 1);
      data.labels.push(
        (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
      );
      data.series[0].push(Math.floor(Math.random() * factor));
    }

    return of(data);
  }

  getChartistActivePowerData() {
    const data = {series: [[]]};
    const x = new Date();
    x.setDate(x.getDate() - 1);
    for (let i = 0; i < 144; i++) {
      x.setMinutes(x.getMinutes() + 1);
      data.series[0].push({x: new Date(x), y: Math.floor(Math.random() * 900)});
    }
    return of(data);
  }

  getRadialDataChartist() {
    const data = {series: [30, 10, 5], labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']};
    return of(data);
  }

  getChartistStackedBarData() {
    const data = {labels: [], series: [[], [], []]};
    const x = new Date();
    x.setDate(x.getDate() - 15);
    for (let i = 0; i < 15; i++) {
      x.setDate(x.getDate() + 1);
      data.labels.push(
        (x.getMonth() + 1) + '-' + x.getDate() + '-' + x.getFullYear(),
      );
      data.series[0].push(Math.floor(Math.random() * 1999));
      data.series[1].push(Math.floor(Math.random() * 199));
      data.series[2].push(Math.floor(Math.random() * 19));
    }

    return of(data);
  }
}
