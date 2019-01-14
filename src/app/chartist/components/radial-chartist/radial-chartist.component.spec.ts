import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialChartistComponent } from './radial-chartist.component';

describe('RadialChartistComponent', () => {
  let component: RadialChartistComponent;
  let fixture: ComponentFixture<RadialChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
