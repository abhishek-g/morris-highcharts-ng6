import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackChartistComponent } from './stack-chartist.component';

describe('StackChartistComponent', () => {
  let component: StackChartistComponent;
  let fixture: ComponentFixture<StackChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
