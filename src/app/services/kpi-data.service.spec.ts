import { TestBed, inject } from '@angular/core/testing';

import { KpiDataService } from './kpi-data.service';

describe('KpiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpiDataService]
    });
  });

  it('should be created', inject([KpiDataService], (service: KpiDataService) => {
    expect(service).toBeTruthy();
  }));
});
