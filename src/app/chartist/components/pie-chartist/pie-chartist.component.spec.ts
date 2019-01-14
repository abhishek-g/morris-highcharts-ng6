import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartistComponent } from './pie-chartist.component';

describe('PieChartistComponent', () => {
  let component: PieChartistComponent;
  let fixture: ComponentFixture<PieChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
