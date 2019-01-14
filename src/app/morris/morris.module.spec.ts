import { MorrisModule } from './morris.module';

describe('MorrisModule', () => {
  let morrisModule: MorrisModule;

  beforeEach(() => {
    morrisModule = new MorrisModule();
  });

  it('should create an instance', () => {
    expect(morrisModule).toBeTruthy();
  });
});
