import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterHighchartsComponent } from './scatter-highcharts.component';

describe('ScatterHighchartsComponent', () => {
  let component: ScatterHighchartsComponent;
  let fixture: ComponentFixture<ScatterHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
