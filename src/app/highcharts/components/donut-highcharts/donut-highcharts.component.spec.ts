import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutHighchartsComponent } from './donut-highcharts.component';

describe('DonutHighchartsComponent', () => {
  let component: DonutHighchartsComponent;
  let fixture: ComponentFixture<DonutHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
