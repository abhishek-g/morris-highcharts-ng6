import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendChartistComponent } from './trend-chartist.component';

describe('TrendChartistComponent', () => {
  let component: TrendChartistComponent;
  let fixture: ComponentFixture<TrendChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
