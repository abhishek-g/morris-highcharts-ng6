import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeHighchartsComponent } from './gauge-highcharts.component';

describe('GaugeHighchartsComponent', () => {
  let component: GaugeHighchartsComponent;
  let fixture: ComponentFixture<GaugeHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
