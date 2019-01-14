import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiHighchartsComponent } from './kpi-highcharts.component';

describe('KpiHighchartsComponent', () => {
  let component: KpiHighchartsComponent;
  let fixture: ComponentFixture<KpiHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
