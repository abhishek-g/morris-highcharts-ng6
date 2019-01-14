import { ChartistModule } from './chartist.module';

describe('ChartistModule', () => {
  let chartistModule: ChartistModule;

  beforeEach(() => {
    chartistModule = new ChartistModule();
  });

  it('should create an instance', () => {
    expect(chartistModule).toBeTruthy();
  });
});
