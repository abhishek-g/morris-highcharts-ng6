import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiChartistComponent } from './kpi-chartist.component';

describe('KpiChartistComponent', () => {
  let component: KpiChartistComponent;
  let fixture: ComponentFixture<KpiChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
