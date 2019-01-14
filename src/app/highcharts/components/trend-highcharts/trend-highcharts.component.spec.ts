import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendHighchartsComponent } from './trend-highcharts.component';

describe('TrendHighchartsComponent', () => {
  let component: TrendHighchartsComponent;
  let fixture: ComponentFixture<TrendHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
