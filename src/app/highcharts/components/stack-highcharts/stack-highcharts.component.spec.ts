import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackHighchartsComponent } from './stack-highcharts.component';

describe('StackHighchartsComponent', () => {
  let component: StackHighchartsComponent;
  let fixture: ComponentFixture<StackHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
