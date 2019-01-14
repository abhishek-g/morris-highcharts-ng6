import { HighchartsModule } from './highcharts.module';

describe('HighchartsModule', () => {
  let highchartsModule: HighchartsModule;

  beforeEach(() => {
    highchartsModule = new HighchartsModule();
  });

  it('should create an instance', () => {
    expect(highchartsModule).toBeTruthy();
  });
});
